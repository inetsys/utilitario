(function () {
    "use strict";

    var options = {
            allow_nan: false,
            timestamps_as_date: true,
            throw_invalid_casts: false,
            cast_string_to_array_split: false, //",",
            cast_nan_to_zero: true
        },
        isHtml = require('is-html'),
        object = require("object-enhancements"),
        array = require("array-enhancements"),
        util = require("util"),
        qs = require("qs"),
        url = require("url"),
        __is,
        __parse,
        __transform,
        __constraints,
        __cast,

        __debug = function () {};
        //__debug = console.log;

    __is = {
        dateStrict: function (val) {
            return val instanceof Date;
        },
        numberStrict: function (val) {
            return "number" === typeof val;
        },
        // float
        decimal: function (val) {
            if (__is.numberStrict(val)) {
                return true;
            }

            if (__is.object(val)) {
                return false;
            }

            var str = "" + val; // cast to string

            return str !== "" && /^(?:-?(?:[0-9]+))?(?:\.[0-9]*)?(?:[eE][\+\-]?(?:[0-9]+))?$/.test(str);
        },
        //int
        integer: function (val) {
            if (__is.numberStrict(val)) {
                return true;
            }
            if (__is.array(val)) {
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
            return val === undefined || val === null || val === "" || val === false || val === 0 || __is.nan(val);
        },
        notNull: function (val) {
            return !__is.null(val);
        },
        empty: function (val) {
            if (__is.string(val)) {
                return val.length === 0 || (/^[\s\t\r\n]*$/.test(val));
            }

            if (__is.array(val)) {
                return val.length === 0;
            }

            if (__is.object(val)) {
                if (__is.regex(val) || __is.dateStrict(val)) {
                    return false;
                }

                var i;
                for (i in val) {
                    return false;
                }
                return true;
            }

            return __is.null(val);
        },
        infinite: function (val) {
            return val === Infinity || val === -Infinity;
        },
        notEmpty: function (str) {
            return !__is.empty(str);
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
        html: function (val) {
            return __is.string(val) && isHtml(val);
        },
        array: function (val) {
            return Array.isArray(val);
        },
        date: function (val) {
            if (__is.string(val)) {
                var intDate = Date.parse(val);
                return !isNaN(intDate);
            }

            if (__is.dateStrict(val)) {
                return true;
            }

            if (options.timestamps_as_date && __is.numberStrict(val) && val > 0) {
                if (__is.infinite(val)) {
                    return false;
                }
                return true;
            }

            // todo timestamp ?

            return false;
        },
        json: function (val) {
            if (__is.string(val)) {
                try {
                    JSON.parse(val);
                    return true;
                } catch (e) {}

                return false;
            }
            return false;
        },
        boolean: function (val) {
            return val === "true" || val === "false" || val === true || val === false;
        }
    };

    __constraints = {
        keys: function (value, keys) {
            if (!Array.isArray(keys)) {
                throw new Error("keys must be an array");
            }

            if ("object" !== typeof value) {
                return false;
            }

            var i,
                max = keys.length;

            for (i = 0; i < max; ++i) {
                if (value[keys[i]] === undefined) {
                    return false;
                }
            }

            return true;

        },
        in: function (needle, haystack) {
            if (!__is.array(haystack)) {
                throw new Error("haystack must be an array");
            }

            return haystack.indexOf(needle) >= 0;
        },
        notIn: function (needle, haystack) {
            return !__constraints.in(needle, haystack);
        },
        contains: function (needle, haystack) {
            if (!__is.string(haystack)) {
                throw new Error("needle must be an string");
            }

            return haystack.indexOf(needle) >= 0;
        },
        notContains: function (needle, haystack) {
            return !__constraints.contains(needle, haystack);
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
                throw new Error("invalid pattern argument");
            }

            modifiers = modifiers || "";
            str = "" + str; // cast to string

            if (Object.prototype.toString.call(pattern).slice(8, -1) !== "RegExp") {
                pattern = new RegExp(pattern, modifiers);
            }

            return pattern.test(str);
        },
        notRegex: function (str, pattern, modifiers) {
            return !__constraints.regex(str, pattern, modifiers);
        },
        dateAfter: function (str, date) {
            if (!__is.date(date)) {
                throw new Error("invalid input date" + date);
            }

            var a, b;

            if (__is.date(str)) {
                a = __cast.date(str).getTime();
            } else {
                a = 0;
            }

            b = __cast.date(date).getTime();

            return !(a && b && a <= b);
        },
        dateBefore: function (str, date) {
            if (!__is.date(date)) {
                throw new Error("invalid input date" + date);
            }

            var a, b;

            if (__is.date(str)) {
                a = __cast.date(str).getTime();
            } else {
                a = 0;
            }

            b = __cast.date(date).getTime();

            return !(a && b && a >= b);
        },
        email: function (str) {
            if (__is.string(str)) {
                return new RegExp(/^(?:[\w\!\#\$\%\&\"\*\+\-\/\=\?\^\`\{\|\}\~]+\.)*[\w\!\#\$\%\&\"\*\+\-\/\=\?\^\`\{\|\}\~]+@(?:(?:(?:[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!\.)){0,61}[a-zA-Z0-9]?\.)+[a-zA-Z0-9](?:[a-zA-Z0-9\-](?!$)){0,61}[a-zA-Z0-9]?)|(?:\[(?:(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\.){3}(?:[01]?\d{1,2}|2[0-4]\d|25[0-5])\]))$/).test(str);
            }

            return false;
        },
        url: function (str) {
            if (__is.string(str)) {
                //A modified version of the validator from @diegoperini / https://gist.github.com/729294
                return str.length < 2083 && new RegExp(/^(?!mailto:)(?:(?:https?|ftp):\/\/)?(?:\S+(?::\S*)?@)?(?:(?:(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[0-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]+-?)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))|localhost)(?::\d{2,5})?(?:\/[^\s]*)?$/i).test(str);
            }
            return false;
        },
        alpha: function (val) {
            if (__is.string(val)) {
                return new RegExp(/^[a-zA-Z]+$/).test(val);
            }

            return false;
        },
        alphanumeric: function (val) {
            if (__is.numberStrict(val) && !__is.nan(val)) {
                return true;
            }

            if (__is.string(val)) {
                return new RegExp(/^[a-zA-Z0-9]+$/).test(val);
            }

            return false;
        },
        numeric: function (val) {
            if (__is.numberStrict(val) && !__is.nan(val)) {
                return true;
            }

            if (!__is.string(val)) {
                return false;
            }

            return new RegExp(/^-?[0-9]+$/).test(val);
        },
        hexadecimal: function (str) {
            if (__is.string(str)) {
                return new RegExp(/^[0-9a-fA-F]+$/).test(str);
            }

            return false;
        },
        hexColor: function (str) {
            if (__is.string(str)) {
                return new RegExp(/^#?([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/).test(str);
            }

            return false;
        },
        // applicable to string and array
        length: function (val, min, max) {
            if (val === undefined) {
                return false;
            }

            if (!__is.numberStrict(min)) {
                throw new Error("min argument must be a number");
            }

            if (__is.string(val) || __is.array(val)) {
                return val.length >= min && (max === undefined || max >= val.length);
            }
            return false;
        },
        UUIDv3: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },
        UUIDv4: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },
        UUIDv5: function (val) {
            var str = "" + val;

            var pattern = /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i;
            return pattern.test(str);
        },
        // applicable to numbers and strings
        min: function (val, min) {
            if (!__is.numberStrict(min)) {
                throw new Error("min argument must be a number");
            }

            if (__is.string(val)) {
                return val.length >= min;
            } else if (__is.numberStrict(val)) {
                var num = parseFloat(val);
                return isNaN(num) ? false : num >= min;
            }

            return false;

        },
        // applicable to numbers and strings
        max: function (val, max) {
            if (!__is.numberStrict(max)) {
                throw new Error("val argument must be a number");
            }

            if (__is.string(val)) {
                return val.length <= max;
            } else if (__is.numberStrict(val)) {
                var num = parseFloat(val);
                return isNaN(num) ? false : num <= max;
            }

            return false;
        },

        ip : function (str) {
            if (__constraints.ip4(str)) {
                return true;
            } else if (__constraints.ip6(str)) {
                return true;
            }

            return false;
        },
        //node-js-core
        ip4 : function (str) {
            if (/^(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)\.(\d?\d?\d)$/.test(str)) {
                var parts = str.split(".").sort();
                // no need to check for < 0 as regex won"t match in that case
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

    __parse = {
        string: function (val) {
            var str;

            if ("string" === typeof val) {
                str = "" + val;
                switch (str) {
                case "undefined":
                    return undefined;
                case "null":
                    return null;
                case "true":
                    return true;
                case "false":
                    return false;
                case "NaN":
                    return NaN;
                case "Infinity":
                    return Infinity;
                }

                if (__is.decimal(str)) {
                    return __cast.float(str);
                }
            }

            return val;
        },
        querystring: function (val) {
            return qs.parse(val);
        },
        json: function (val) {
            return JSON.parse(val);
        },
        url: function (urlStr, parseQueryString, slashesDenoteHost) {
            if (__is.url(urlStr)) {
                return url.parse(urlStr, parseQueryString, slashesDenoteHost);
            }

            return null;
        }
    };

    __transform = {
        querystring: function (val) {
            return qs.stringify(val);
        },
        json: function (val) {
            return JSON.stringify(val);
        },
        length: function (val, max) {
            if ("string" === val) {
                if (val.length > max) {
                    return val.substring();
                }

                return val;
            } else if (Array.isArray(val)) {
                if (val.length > max) {
                    return val.splice(0, max);
                }

                return val;
            }
            throw new Error("invalid tranform input");
        },
        lowercase: function (val) {
            var str = __cast.string(val);

            if (str === null) {
                return null;
            }
            return str.toLowerCase();
        },
        uppercase: function (val) {
            var str = __cast.string(val);

            if (str === null) {
                return null;
            }
            return str.toUpperCase();
        },
        escapeHTML: function (val) {
            var str = __cast.string(val);

            return str
                .replace(/&/g, "&amp;")
                .replace(/</g, "&lt;")
                .replace(/>/g, "&gt;")
                .replace(/"/g, "&quot;")
                .replace(/'/g, "&#039;");
        },
        stripTags: function (input, allowed) {
            // From: http://phpjs.org/functions
            // +   original by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   improved by: Luke Godfrey
            // +      input by: Pul
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Onno Marsman
            // +      input by: Alex
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Marc Palau
            // +   improved by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +      input by: Brett Zamir (http://brett-zamir.me)
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Eric Nagel
            // +      input by: Bobby Drake
            // +   bugfixed by: Kevin van Zonneveld (http://kevin.vanzonneveld.net)
            // +   bugfixed by: Tomasz Wesolowski
            // +      input by: Evertjan Garretsen
            // +    revised by: Rafał Kukawski (http://blog.kukawski.pl/)
            // *     example 1: strip_tags("<p>Kevin</p> <br /><b>van</b> <i>Zonneveld</i>", "<i><b>");
            // *     returns 1: "Kevin <b>van</b> <i>Zonneveld</i>"
            // *     example 2: strip_tags("<p>Kevin <img src="someimage.png" onmouseover="someFunction()">van <i>Zonneveld</i></p>", "<p>");
            // *     returns 2: "<p>Kevin van Zonneveld</p>"
            // *     example 3: strip_tags("<a href="http://kevin.vanzonneveld.net">Kevin van Zonneveld</a>", "<a>");
            // *     returns 3: "<a href="http://kevin.vanzonneveld.net">Kevin van Zonneveld</a>"
            // *     example 4: strip_tags("1 < 5 5 > 1");
            // *     returns 4: "1 < 5 5 > 1"
            // *     example 5: strip_tags("1 <br/> 1");
            // *     returns 5: "1  1"
            // *     example 6: strip_tags("1 <br/> 1", "<br>");
            // *     returns 6: "1  1"
            // *     example 7: strip_tags("1 <br/> 1", "<br><br/>");
            // *     returns 7: "1 <br/> 1"

            allowed = (((allowed || "") + "").toLowerCase().match(/<[a-z][a-z0-9]*>/g) || []).join(""); // making sure the allowed arg is a string containing only tags in lowercase (<a><b><c>)
            var tags = /<\/?([a-z][a-z0-9]*)\b[^>]*>/gi,
                commentsAndPhpTags = /<!--[\s\S]*?-->|<\?(?:php)?[\s\S]*?\?>/gi;

            return input.replace(commentsAndPhpTags, "").replace(tags, function ($0, $1) {
                return allowed.indexOf("<" + $1.toLowerCase() + ">") > -1 ? $0 : "";
            });
        },
        hexToBin: function (val) {
            var str = __cast.string(val);

            return new Buffer(str, "hex");
        }
    };



    __cast = {
        integer: function (val) {
            var i;

            if (__is.array(val)) {
                i = 0;
            } else {
                i = parseInt(val, 10);
            }

            if (options.allow_nan === false && isNaN(i)) {
                throw new Error("Nan is found");
            }

            return isNaN(i) && options.cast_nan_to_zero ? 0 : i;
        },
        float: function (val) {
            var i;

            if (__is.array(val)) {
                i = 0;
            } else {
                i = parseFloat(val, 10);
            }

            if (options.allow_nan === false && isNaN(i)) {
                throw new Error("Nan is found");
            }

            return isNaN(i) && options.cast_nan_to_zero ? 0 : i;
        },
        string: function (val) {
            if (val === null || val === undefined) {
                return null;
            }

            if (__is.object(val)) {
                if (val.toString !== Object.prototype.toString) {
                    return val.toString();
                }
                return null;
            }
            if (__is.nan(val)) {
                return null;
            }
            return __is.string(val) ? val : String(val);
        },
        date: function (val) {
            if (__is.dateStrict(val)) {
                return val;
            }

            // it"s a linux timestamp?
            if (__is.numberStrict(val) && val > 0) {
                return new Date(val * 1000);
            }

            var intDate = Date.parse(val);

            if (options.throw_invalid_casts && options.allow_nan === false && isNaN(intDate)) {
                throw new Error("Nan is found");
            }

            if (isNaN(intDate)) {
                return null;
            }

            return new Date(intDate);
        },
        regex: function (value) {
            if (__is.string(value)) {
                return new RegExp(value);
            }
            if (__is.regex(value)) {
                return value;
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to regexp of " + value);
            }

            return null;
        },
        object: function (val) {
            var t,
                r;

            if (__is.string(val)) {
                try {
                    t = JSON.parse(val);
                    if ("object" === typeof t) {
                        return t;
                    }
                } catch (e) {
                }

                return null;
            }
            if (__is.object(val)) {
                if (Array.isArray(val)) {
                    r = {};

                    val.forEach(function (v, k) {
                        r[k] = v;
                    });

                    return r;
                }
                return val;
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to object of " + val);
            }

            return null;
        },
        array: function (val) {
            if (__is.array(val)) {
                return val;
            }

            if (__is.string(val) && options.cast_string_to_array_split) {
                return val.split(options.cast_string_to_array_split);
            }

            if (options.throw_invalid_casts) {
                throw new Error("invalid cast to object of " + val);
            }

            return null;
        },
        binary: function (bin) {
            //TODO review this, must be used with transform hexToBin
            return bin;
        }
    };

    function __schema(mixed, structure, errors, options, __path) {
        if ("object" !== typeof structure) {
            throw new Error("structure must be an object");
        }

        if (!Array.isArray(errors)) {
            throw new Error("errors must be an array");
        }


        options = options || {};
        options.cast = options.cast === undefined ? true : !!options.cast;

        __path = __path || [];

        var constraints = structure.constraints || {},
            cast_fn,
            transform_fn,
            args,
            i,
            max;

        __debug("structure", require("util").inspect(structure, {depth: null}), "value", mixed);

        // optional and nullable are final constraints
        if (mixed === undefined) {
            if (constraints.optional === undefined) {
                errors.push(__path.join(".") + " is undefined");
            }
            if (structure.default !== undefined) {
                mixed = structure.default;
            }
            return mixed;
        }

        if (mixed === null) {
            if (constraints.nullable !== undefined) {
                return mixed;
            }
        }

        if (constraints) {
            //try {
                var _errors = __validate(mixed, constraints);

                if (errors !== false) {
                    array.combine(errors, _errors);
                }
            //} catch(e) {
            //    array.combine(errors, [e.message + "\n" + e.stack]);
            //}
        }

        // cast should be only valid to input
        if (structure.sanitize) {
            __debug("sanitize: ", structure.sanitize);
            for (i in structure.sanitize) {
                transform_fn = __transform[i];
                if (!transform_fn) {
                    errors.push("sanitize [" + structure.sanitize + "] not found");
                } else {
                    args = structure.sanitize[i] || [];

                    switch (args.length) {
                    case 0:
                        mixed = transform_fn(mixed);
                        break;
                    case 1:
                        mixed = transform_fn(mixed, args[0]);
                        break;
                    case 2:
                        mixed = transform_fn(mixed, args[0], args[1]);
                        break;
                    default:
                        mixed = transform_fn.apply(__constraints, [mixed].concat(args));
                        break;
                    }
                }
                
            }

        }

        // cast should be only valid to input
        if (options.cast && structure.cast !== undefined) {
            __debug("cast to: ", structure.cast);
            cast_fn = __cast[structure.cast];

            if (!cast_fn) {
                errors.push("cast [" + structure.cast + "] not found");
            } else {
                mixed = cast_fn(mixed);
            }
        }

        if ("object" === structure.cast && structure.object !== undefined) {
            __debug("object go deep");
            for (i in structure.object) {
                __debug("--", i, mixed, mixed[i]);
                if (structure.object[i] !== undefined) {
                    __path.push(i);
                    mixed[i] = __schema(mixed[i], structure.object[i], errors, options, __path);
                    __path.pop();
                }
            }
        }

        if ("array" === structure.cast && structure.items !== undefined) {
            __debug("array go deep");
            for (i = 0, max = mixed.length; i < max; ++i) {
                __debug("--", i);

                __path.push(i);
                mixed[i] = __schema(mixed[i], structure.items, errors, options, __path);
                __path.pop();
            }
        }

        return mixed;


    }

    function __validate(mixed, _constraints) {

        if ("object" !== typeof _constraints) {
            throw new Error("constraints must be an object");
        }
        var constraints = object.clone(_constraints),
            constrain_key,
            fn,
            args,
            str_err,
            ret,
            errors = [];

        // optional
        if (constraints.optional !== undefined && mixed === undefined) {
            return;
        }

        for (constrain_key in constraints) {
            if (constrain_key === "optional" || constrain_key === "nullable") {
                continue;
            }

            fn = __is[constrain_key] || __constraints[constrain_key];
            args = constraints[constrain_key] || [];

            if (!fn) {
                throw new Error("constraint [" + constrain_key + "] not found");
            }

            // last one must be a string
            str_err = args.pop();

            if ("string" !== typeof str_err) {
                throw new Error("constraint error-text is not an string");
            }

            args.unshift(mixed);

            switch (args.length) {
            case 1:
                ret = fn(args[0]);
                break;
            case 2:
                ret = fn(args[0], args[1]);
                break;
            case 3:
                ret = fn(args[0], args[1], args[2]);
                break;
            case 4:
                ret = fn(args[0], args[1], args[2], args[3]);
                break;
            default:
                ret = fn.apply(__constraints, args);
                break;
            }
            if (!ret) {
                errors.push(str_err);
            }
        }

        return errors.length ? errors : false;
    }


    function __sanitize(mixed, _tranformations) {
        if ("object" !== typeof _tranformations) {
            throw new Error("transformations must be an object");
        }

        var tranformations = object.clone(_tranformations),
            t_key,
            fn,
            args,
            str_err,
            ret,
            errors = [];

        for (t_key in tranformations) {
            fn = __transform[t_key];
            args = tranformations[t_key] || [];

            if (!fn) {
                throw new Error("transform [" + t_key + "] not found");
            }

            args.unshift(mixed);

            switch (args.length) {
            case 1:
                mixed = fn(args[0]);
                break;
            case 2:
                mixed = fn(args[0], args[1]);
                break;
            case 3:
                mixed = fn(args[0], args[1], args[2]);
                break;
            case 4:
                mixed = fn(args[0], args[1], args[2], args[3]);
                break;
            default:
                mixed = fn.apply(__constraints, args);
                break;
            }
        }

        return mixed;
    }

    module.exports = {
        // configuration
        options: options,

        // core
        is: __is,
        parse: __parse,
        transform: __transform,
        constraints: __constraints,
        cast: __cast,
        
        // util functions
        validate: __validate,
        schema: __schema,
        sanitize: __sanitize
    };

}());