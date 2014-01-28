(function () {
    "use strict";

    var options = {
            allow_nan: false,
            timestamps_as_date: true,
            throw_invalid_casts: false,
            cast_string_to_array_split: ",",
            cast_nan_to_zero: true
        },
        util = require("util"),
        is,
        constraints,
        cast;

    is = {
        dateStrict: function (val) {
            return val instanceof Date;
        },
        numberStrict: function (val) {
            return "number" === typeof val;
        },
        // float
        decimal: function (val) {
            if (is.numberStrict(val)) {
                return true;
            }

            if (is.object(val)) {
                return false;
            }

            var str = "" + val; // cast to string

            return str !== "" && /^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/.test(str);
        },
        //int
        integer: function (val) {
            if (is.numberStrict(val)) {
                return true;
            }
            if (is.array(val)) {
                return false;
            }

            var str = "" + val; // cast to string
            return /^(?:-?(?:0|[1-9][0-9]*))$/.test(str);
        },
        nan: function (val) {
            return "number" === typeof val && isNaN(val);
        },
        nullStrict: function (val) {
            return val === null;
        },
        null: function (val) {
            return val === undefined || val === null || val === "" || val === false || val === 0 || is.nan(val);
        },
        notNull: function (val) {
            return !is.null(val);
        },
        empty: function (val) {
            if (is.string(val)) {
                return val.length === 0 || (/^[\s\t\r\n]*$/.test(val));
            }

            if (is.array(val)) {
                return val.length === 0;
            }

            if (is.object(val)) {
                if (is.regex(val) || is.dateStrict(val)) {
                    return false;
                }

                var i;
                for (i in val) {
                    return false;
                }
                return true;
            }

            return is.null(val);
        },
        infinite: function (val) {
            return val === Infinity || val === -Infinity;
        },
        notEmpty: function (str) {
            return !is.empty(str);
        },
        regex: function (val) {
            return util.isRegExp(val);
        },
        object: function (val) {
            if (val === null) { // this is just crazy js!
                return false;
            }
            return "object" === typeof val; // this need tweaks, see object-enhancements
        },
        string: function (val) {
            return "string" === typeof val;
        },
        array: function (val) {
            return Array.isArray(val);
        },
        date: function (val) {
            if (this.string(val)) {
                var intDate = Date.parse(val);
                return !isNaN(intDate);
            }

            if (this.dateStrict(val)) {
                return true;
            }

            if (options.timestamps_as_date && is.numberStrict(val) && val > 0) {
                if (is.infinite(val)) {
                    return false;
                }
                return true;
            }

            // todo timestamp ?

            return false;
        },
        json: function (val) {
            if (is.string(val)) {
                try {
                    JSON.parse(val);
                    return true;
                } catch (e) {}

                return false;
            }
            return false;
        },
    };

    constraints = {
        in: function (needle, haystack) {
            if (!haystack) {
                return false;
            }

            if (!is.array(haystack)) {
                throw new Error("haystack must be an array");
            }

            return haystack.indexOf(needle) >= 0;
        },
        notIn: function (needle, haystack) {
            return !constraints.in(needle, haystack);
        },
        contains: function (haystack, needle) {
            if (!needle) {
                return false;
            }

            if (is.array(haystack)) {
                if (!is.array(needle)) {
                    throw new Error("needle must be an array");
                }
            } else if (!is.string(haystack)) {
                // only string or arrays can contains ?
                // maybe object in future versions
                return false;
            }

            return haystack.indexOf(needle) >= 0;
        },
        notContains: function (haystack, needle) {
            return !constraints.contains(haystack, needle);
        },
        equals: function (a, b) {
            return a == b;
        },
        notEquals: function (a, b) {
            return a != b;
        },
        equalsStrict: function (a, b) {
            return a === b;
        },
        notEqualsStrict: function (a, b) {
            return a !== b;
        },
        regex: function (str, pattern, modifiers) {
            if (!pattern) {
                console.log(pattern);
                throw new Error("invalid arguments pattern");
            }

            str = "" + str;
            if (Object.prototype.toString.call(pattern).slice(8, -1) !== "RegExp") {
                pattern = new RegExp(pattern, modifiers);
            }
            return pattern.test(str);
        },
        notRegex: function (str, pattern, modifiers) {
            return !constraints.regex(str, pattern, modifiers);
        },
        dateAfter: function (str, date) {
            if (!is.date(date)) {
                throw new Error("invalid input date" + date);
            }

            var a, b;

            if (is.date(str)) {
                a = cast.date(str) + 0;
                b = cast.date(date) + 0;
            }

            return !(a && b && a <= b);
        },
        dateBefore: function (str, date) {
            if (!is.date(date)) {
                throw new Error("invalid input date" + date);
            }

            var a, b;

            if (is.date(str)) {
                a = cast.date(str) + 0;
                b = cast.date(date) + 0;
            }

            return !(a && b && a >= b);
        },
        email: function (str) {
            if (is.string(str)) {
                return new RegExp(/^(?:[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\'\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/).test(str);
            }

            return false;
        },
        url: function (str) {
            if (is.string(str)) {
                //A modified version of the validator from @diegoperini / https://gist.github.com/729294
                return str.length < 2083 && new RegExp(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i).test(str);
            }
            return false;
        },
        alpha: function (str) {
            if (is.string(str)) {
                return new RegExp(/^[a-zA-Z]+$/).test(str);
            }

            return false;
        },
        alphanumeric: function (str) {
            if (is.numberStrict(str)) {
                return true;
            }

            if (is.string(str)) {
                return new RegExp(/^[a-zA-Z0-9]+$/).test(str);
            }

            return false;
        },
        numeric: function (str) {
            if (is.numberStrict(str)) {
                return true;
            }

            if (!is.string(str)) {
                return false;
            }

            return new RegExp(/^-?[0-9]+$/).test(str);
        },
        hexadecimal: function (str) {
            if (is.string(str)) {
                return new RegExp(/^[0-9a-fA-F]+$/).test(str);
            }

            return false;
        },
        hexColor: function (str) {
            if (is.string(str)) {
                return new RegExp(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).test(str);
            }

            return false;
        },
        // applicable to string and array
        length: function (val, min, max) {
            if (!is.numberStrict(min)) {
                throw new Error("min argument must be a number");
            }

            if (is.string(val) || is.array(val)) {
                return val.length >= min && (max === undefined || val.length >= max);
            }
            return false;
        },
        isUUIDv3: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },
        isUUIDv4: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },
        isUUIDv5: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },

        min: function (num, val) {
            if (!is.numberStrict(val)) {
                throw new Error("val argument must be a number");
            }

            var number = parseFloat(num);
            return isNaN(number) || number >= val;
        },
        max: function (num, val) {
            if (!is.numberStrict(val)) {
                throw new Error("val argument must be a number");
            }

            var number = parseFloat(num);
            return isNaN(number) || number <= val;
        },

        ip : function (str) {
            if (constraints.ip4(str)) {
                return true;
            } else if (constraints.ip6(str)) {
                return true;
            }

            return false;
        },
        //node-js-core
        ip4 : function (str) {
            if (/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(str)) {
                var parts = str.split(".").sort();
                // no need to check for < 0 as regex won't match in that case
                if (parts[3] > 255) {
                    return false;
                }
                return true;
            }
            return false;
        },
        //node-js-core
        ip6 : function (str) {
            if (/^::|^::1|^([a-fA-F0-9]{1,4}::?){1,7}([a-fA-F0-9]{1,4})$/.test(str)) {
                return true;
            }
            return false;
        },


    };


    cast = {
        int: function (val) {
            var i = parseInt(val, 10);

            if (options.allow_nan === false && isNaN(i)) {
                throw new Error("Nan is found");
            }

            return isNaN(i) && options.cast_nan_to_zero ? 0 : i;
        },
        float: function (val) {
            var i = parseFloat(val, 10);

            if (options.allow_nan === false && isNaN(i)) {
                throw new Error("Nan is found");
            }

            return isNaN(i) && options.cast_nan_to_zero ? 0 : i;
        },
        string: function (val) {
            return is.string(val) ? val : String(val);
        },
        date: function (val) {
            if (is.dateStrict(val)) {
                return val;
            }

            // it's a linux timestamp?
            if (is.numberStrict(val) && val > 0) {
                return new Date(val * 1000);
            }

            var intDate = Date.parse(val);

            if (options.throw_invalid_casts && options.allow_nan === false && isNaN(intDate)) {
                throw new Error("Nan is found");
            }

            return new Date(intDate);
        },
        regex: function (value) {
            if (is.string()) {
                return new RegExp(value);
            }
            if (is.regex(value)) {
                return value;
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to regexp of " + value);
            }

            return null;
        },
        object: function (val) {
            if (is.json(val)) {
                return JSON.parse(val);
            }
            if (is.object(val)) {
                return val;
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to object of " + val);
            }

            return {};
        },
        array: function (val) {
            if (is.array(val)) {
                return val;
            }

            if (is.string(val) && options.cast_string_to_array_split) {
                return val.split(options.cast_string_to_array_split);
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to object of " + val);
            }

            return [];
        },
        lowercase: function (str) {
            return ("" + str).toLowerCase();
        },
        uppercase: function (str) {
            return ("" + str).toUpperCase();
        },
    };

    module.exports = {
        options: options,
        is: is,
        constraints: constraints,
        cast: cast
    };

}());