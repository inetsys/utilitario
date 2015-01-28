(function () {
    "use strict";
    require("ass");

    var util = require("util"),
        tap = require("tap"),
        test = tap.test,

        Table = require("cli-table"),
        utilitario = require("../index.js"),

        table;

        //console.log("util instance", util.inspect(instance, {depth: 5, colors: true}));
/*
console.log(utilitario.is.null(NaN));

console.log(NaN === undefined, NaN === null, NaN === "", NaN === false, NaN === 0, utilitario.is.nan(NaN));
console.log("number" === typeof NaN, isNaN(NaN));
process.exit();
*/
    test("is", function (t) {
        var i,
            head = [],
            source = [
            {
                value: undefined,
                oks: ["null", "empty"]
            }, {
                value: null,
                oks: ["null", "empty", "nullStrict"]
            }, {
                value: 0,
                oks: ["numberStrict", "decimal", "integer", "null", "empty"]
            }, {
                value: 100,
                oks: ["numberStrict", "decimal", "integer", "notNull", "notEmpty", "date"]
            }, {
                value: "100",
                oks: ["decimal", "integer", "notNull", "notEmpty", "string", "date", "jsonStrict"]
            }, {
                value: "",
                oks: ["null", "empty", "string"]
            }, {
                value: {},
                oks: ["notNull", "empty", "object"]
            }, {
                value: {xx: true},
                oks: ["notNull", "notEmpty", "object"]
            }, {
                value: [],
                oks: ["notNull", "empty", "object", "array"]
            }, {
                value: [10],
                oks: ["notNull", "notEmpty", "object", "array"]
            }, {
                value: new RegExp("//"),
                oks: ["notNull", "notEmpty", "regex", "object"]
            }, {
                value: new Date("2014-01-01"),
                oks: ["notNull", "notEmpty", "date", "object", "dateStrict"]
            }, {
                value: NaN,
                oks: ["integer", "number", "numberStrict", "decimal", "null", "empty", "nan"]
            }, {
                value: Infinity,
                oks: ["integer", "number", "numberStrict", "decimal", "notNull", "notEmpty", "infinite"]
            }, {
                value: -Infinity,
                oks: ["integer", "number", "numberStrict", "decimal", "notNull", "notEmpty", "infinite"]
            }, {
                value: "{\"json_test\":true}",
                oks: ["string", "notNull", "notEmpty", "json", "jsonStrict"]
            }
        ];

        head.push("type");
        for (i in utilitario.is) {
            head.push(i.replace(/[A-Z]/, function (found) {
                return "\n" + found;
            }));
        }

        table = new Table({
            head: head,
            style: { "padding-left": 0, "padding-right": 0 }
        });


        source.forEach(function (data) {
            var i,
                r,
                row = //[JSON.stringify(data)];
                //[Object.prototype.toString.call(data)];
                [util.inspect(data.value) + "\n" + Object.prototype.toString.call(data.value)];

            for (i in utilitario.is) {
                r = utilitario.is[i](data.value);
                if (r) {
                    t.equal(data.oks.indexOf(i) > -1, true, row[0] + " is " + i);
                } else {
                    t.equal(data.oks.indexOf(i), -1, row[0] +  " is (not)" + i);
                }
                row.push(r);
            }
            table.push(row);
        });

        t.end();

    });


    test("print is table", function (t) {
        console.log(utilitario.is);
        console.log(table.toString());
        t.end();
    });


    test("cast", function (t) {
        utilitario.options.allow_nan = true;
        var i,
            head = [],
            source = [{
                value: 100,
                cast: [100]
            },{
                value: "100",
                cast: [100]
            },{
                value: null,
                cast: [100]
            },{
                value: undefined,
                cast: [100]
            },{
                value: {x: true},
                cast: [100]
            },{
                value: [],
                cast: [100]
            },{
                value: null,
                cast: [100]
            },{
                value: NaN,
                cast: [100]
            },{
                value: "ok!!",
                cast: [100]
            },{
                value: [500, ,100],
                cast: [100]
            }

            ];

        head.push("type");
        for (i in utilitario.cast) {
            head.push(i.replace(/[A-Z]/, function (found) {
                return "\n" + found;
            }));
        }

        table = new Table({
            head: head,
            style: { "padding-left": 0, "padding-right": 0 }
        });


        source.forEach(function (data) {
            console.log(data);
            var i,
                r,
                row = //[JSON.stringify(data)];
                //[Object.prototype.toString.call(data)];
                [util.inspect(data.value) + "\n" + Object.prototype.toString.call(data.value)];

            for (i in utilitario.cast) {
                r = utilitario.cast[i](data.value);
                //if (r) {
                //    t.equal(data.oks.indexOf(i) > -1, true, row[0] + " is " + i);
                //} else {
                //    t.equal(data.oks.indexOf(i), -1, row[0] +  " is (not)" + i);
                //}
                row.push(util.inspect(r));
            }

            table.push(row);
        });

        t.end();
    });

    // test("print cast table", function (t) {
    //     console.log(utilitario.cast);
    //     console.log(table.toString());
    //     t.end();
    // });

    test("constraints", function(t) {
        var constraints = utilitario.constraints;

        t.throws(function() {
            constraints.in("x", {});
        });

        t.throws(function() {
            constraints.in("x", "y");
        });

        t.throws(function() {
            constraints.in();
        });


        t.equal(constraints.in("x", ["x"]), true, "x in [x]");
        t.equal(constraints.in("x", ["y"]), false, "x in [y]");

        t.equal(constraints.notIn("x", ["x"]), false, "x notIn [x]");
        t.equal(constraints.notIn("x", ["y"]), true, "x notIn [y]");

        t.throws(function() {
            constraints.contains("x", {});
        });

        t.throws(function() {
            constraints.contains("x", []);
        });

        t.throws(function() {
            constraints.contains();
        });

        t.equal(constraints.contains("x", "abcxyz"), true, "abcxyz contains x");
        t.equal(constraints.contains("h", "abcxyz"), false, "abcxyz contains h");

        t.equal(constraints.notContains("x", "abcxyz"), false, "abcxyz contains h");
        t.equal(constraints.notContains("h", "abcxyz"), true, "abcxyz contains h");


        t.equal(constraints.equals("h", "h"), true, "equal");
        t.equal(constraints.equals("h", "b"), false, "equal");
        t.equal(constraints.equals("0", 0), true, "equal coercion");
        t.equal(constraints.equals(undefined, null), true, "equal coercion");

        t.equal(constraints.notEquals(1, 2), true, "notEquals");


        t.equal(constraints.equalsStrict("h", "h"), true, "equal");
        t.equal(constraints.equalsStrict("h", "b"), false, "equal");
        t.equal(constraints.equalsStrict("0", 0), false, "equal no coercion");
        t.equal(constraints.equalsStrict(undefined, null), false, "equal no coercion");

        t.equal(constraints.notEqualsStrict(2, 1), true, "notEqualsStrict");


        t.equal(constraints.regex("abc", /^abc$/), true, "regex");
        t.equal(constraints.regex("xxx", /^abc$/), false, "regex");

        t.equal(constraints.notRegex("abc", /^abc$/), false, "regex");

        t.throws(function() {
            t.equal(constraints.regex("xxx"), false, "regex");
        });


        t.equal(constraints.dateAfter("2012-01-01", new Date("2013-01-01")), false, "dateAfter");
        t.equal(constraints.dateAfter("2015-01-01", new Date("2013-01-01")), true, "dateAfter");

        t.equal(constraints.dateBefore("2012-01-01", new Date("2013-01-01")), true, "dateBefore");
        t.equal(constraints.dateBefore("2015-01-01", new Date("2013-01-01")), false, "dateBefore");


        t.throws(function() {
            t.equal(constraints.dateAfter("xxx", null), false, "regex");
        });

        t.throws(function() {
            t.equal(constraints.dateBefore("xxx", null), false, "regex");
        });


        t.equal(constraints.email("@"), false, "email");
        t.equal(constraints.email("@.com"), false, "email");
        t.equal(constraints.email("@xx.com"), false, "email");
        t.equal(constraints.email("abc@xx"), false, "email");
        t.equal(constraints.email("abc@.com"), false, "email");
        t.equal(constraints.email("abc@xx.com"), true, "email");

        t.equal(constraints.email(101), false, "email");


        t.equal(constraints.url("http://www.xxxx.com/xyz"), true, "url");
        t.equal(constraints.url("ftp://www.xxxx.com/xyz"), true, "url");
        t.equal(constraints.url("domain.com/xyz"), true, "url");

        t.equal(constraints.url("s3://www.xxxx.com/xyz"), false, "url");
        t.equal(constraints.url("http:/com/xyz"), false, "url");
        t.equal(constraints.url("http//com/xyz"), false, "url");
        t.equal(constraints.url("http://xxxx.ca?ssdfjs=Snjs"), false, "url no qs");

        t.equal(constraints.url(101), false, "email");


        t.equal(constraints.alpha("abscdfkls"), true, "alpha");
        t.equal(constraints.alpha("á"), false, "alpha");
        t.equal(constraints.alpha("ä"), false, "alpha");
        t.equal(constraints.alpha("123"), false, "alpha");
        t.equal(constraints.alpha("_-"), false, "alpha");
        t.equal(constraints.alpha("abc-bca"), false, "alpha");

        t.equal(constraints.numeric("123"), true, "numeric");
        t.equal(constraints.numeric(123), true, "numeric");

        t.equal(constraints.alphanumeric("abc123bca"), true, "alpha");
        t.equal(constraints.alphanumeric("."), false, "alpha");

        t.equal(constraints.hexadecimal("abc"), true, "hexadecimal");
        t.equal(constraints.hexadecimal("0F"), true, "hexadecimal");
        t.equal(constraints.hexadecimal("0f"), true, "hexadecimal");

        t.equal(constraints.hexadecimal("jhg"), false, "hexadecimal");


        t.equal(constraints.length("", 1, 10), false, "length");
        t.equal(constraints.length("abc", 1, 10), true, "length");
        t.equal(constraints.length("abc", 1), false, "length");
        t.equal(constraints.length("abc", 3), true, "length");
        t.equal(constraints.length("abc", 2), false, "length");
        t.equal(constraints.length("abasd4sa5dfdsfs6a516dsc", 1, 10), false, "length");

        t.equal(constraints.length(["abc"], 1), true, "length");
        t.equal(constraints.length(["abc"], 0), false, "length");

        t.equal(constraints.length([], 1, 10), false, "length");
        t.equal(constraints.length(["x"], 1, 10), true, "length");
        t.equal(constraints.length([,,,,,,,,,,,,,,,,"x"], 1, 10), false, "length");

        t.throws(function() {
            t.equal(constraints.length([,,,,,,,,,,,,,,,,"x"], null), false, "length");
        });


        t.equal(constraints.min("xXXXx", 5), true, "x5 min str");
        t.equal(constraints.min(15, 5), true, "min number");

        t.equal(constraints.min("xxx", 5), false, "x3 min str");
        t.equal(constraints.min(4, 5), false, "min number");

        t.equal(constraints.max("xxx", 5), true, "x3 max str");
        t.equal(constraints.max(4, 5), true, "max number");

        t.equal(constraints.max("xxXXXx", 5), false, "x5 max str");
        t.equal(constraints.max(15, 5), false, "max number");

        t.throws(function() {
            t.equal(constraints.max("xxXXXx", null), false, "length");
        });

        t.throws(function() {
            t.equal(constraints.min("xxXXXx", null), false, "length");
        });


        [{}, undefined, [], NaN, null].forEach(function(val) {
            t.equal(constraints.alphanumeric(val), false, "alphanumeric");
            t.equal(constraints.alpha(val), false, "alpha");
            t.equal(constraints.numeric(val), false, "numeric");
            t.equal(constraints.hexadecimal(val), false, "hexadecimal");

            t.equal(constraints.min(val, -1), false, "min");
            t.equal(constraints.max(val, -1), false, "max");

            if (!Array.isArray(val)) {
                t.equal(constraints.length(val, 0, 10), false, "length");
            }

        });


        t.end();
    });


    test("rValidate && validate", function(t) {

        var errors = {},
            ret = utilitario.schema("100", {
                constraints: {
                    "integer": ["integer constraint fail"],
                },
                cast: "integer"
            }, errors);


        t.deepEqual(ret, 100, "is 100 number");
        t.deepEqual(errors, {}, "no errors");
        t.end();
    });

    test("rValidate && validate", function(t) {

        var errors = {},
            ret = utilitario.schema("x100", {
                constraints: {
                    "integer": ["integer constraint fail"],
                },
                cast: "integer",
                base_path: "number"
            }, errors);


        t.deepEqual(ret, 0, "is 100 number");
        t.deepEqual(errors, {"number": [["integer constraint fail"]]}, "errors");

        t.end();
    });

    test("rValidate && validate", function(t) {

        var errors = {},
            ret = utilitario.schema({x:100, y: "fdnsjx9"}, {
                cast: "object",
                object: {
                    x: {
                        constraints: {
                            integer: ["integer constraint fail"]
                        },
                        cast: "integer"
                    },
                    y: {
                        constraints: {
                            string: ["string constraint fail"]
                        },
                        cast: "string"
                    },
                    z: {
                        constraints: {
                            string: ["string constraint fail"]
                        },
                        cast: "string"
                    }
                }
            }, errors);


        t.deepEqual(ret, {x:100, y: "fdnsjx9", z:undefined}, "is 100 number");
        t.deepEqual(errors, {z: [["constraint-is-undefined"]]}, "errors");

        t.end();
    });


    test("rValidate && validate", function(t) {
        var errors = {},
            ret = utilitario.schema({x:100, y: "fdnsjx9"}, {
                cast: "object",
                constraints: {
                    keys: [["x", "y", "z"], "missing some keys"]
                },
                object: {
                    x: {
                        constraints: {
                            integer: ["integer constraint fail"]
                        },
                        cast: "integer"
                    },
                    y: {
                        constraints: {
                            string: ["string constraint fail"]
                        },
                        cast: "string"
                    },
                    z: {
                        constraints: {
                            string: ["string constraint fail"]
                        },
                        cast: "string"
                    }
                },
                base_path: "entity"
            }, errors);


        t.deepEqual(ret, {x:100, y: "fdnsjx9", z:undefined}, "is 100 number");
        t.deepEqual(errors, {"entity": [["missing some keys", ["x", "y", "z"]]], "entity.z": [["constraint-is-undefined"]]}, "errors");

        t.end();
    });

    test("validation messages / true", function(t) {
        var errors = {},
            ret = utilitario.schema([10, 20, 30, "x"], {
                cast: "array",
                items: {
                    constraints: {
                        integer: true
                    },
                    messages: {
                        integer: "integer constraint fail"
                    },
                    cast: "integer"
                }
            }, errors);

        t.deepEqual(ret, [10, 20, 30, 0], "casted");
        t.deepEqual(errors, {3: [["integer constraint fail", true]]}, "errors");

        t.end();
    });

    test("rValidate && validate", function(t) {
        var errors = {},
            ret = utilitario.schema([10, 20, 30, "x"], {
                cast: "array",
                items: {
                    constraints: {
                        integer: ["integer constraint fail"]
                    },
                    cast: "integer"
                }
            }, errors);


        t.deepEqual(ret, [10, 20, 30, 0], "casted");
        t.deepEqual(errors, {3: [["integer constraint fail"]]}, "errors");

        t.end();
    });

    test("home schema array test", function(t) {
        // example array of integers
        var array_schema = {
            cast: "array", // mandatory
            items: {
                constraints: {
                    "integer": ["some elements in the array are not integers"],
                },
                cast: "integer"
            } // schema that all elements must fulfill
        }

        // tap test
        var errors = {};
        t.deepEqual(utilitario.schema([1,2,"3"], array_schema, errors), [1,2,3], "ok!");
        t.deepEqual(errors, {}, "no errors");

        errors = {};
        t.deepEqual(utilitario.schema(["abc"], array_schema, errors), [0], "");
        t.deepEqual(errors, {0: [["some elements in the array are not integers"]]}, "with errors");

        t.end();
    });

    test("home schema object test", function(t) {
        // example
        var object_schema = {
            cast: "object", // mandatory
            object: {
                int: {
                    constraints: {
                        "integer": ["int key is not a valid integer"],
                    },
                    cast: "integer"
                },
                string: {
                    constraints: {
                        "string": ["string key is not a valid string"],
                    },
                    cast: "string"
                }
            }
        }

        // tap test
        var errors = {};
        t.deepEqual(utilitario.schema({int: 10, string: "abc"}, object_schema, errors), {int: 10, string: "abc"}, "ok!");
        t.deepEqual(errors, {}, "no errors");

        errors = {};
        t.deepEqual(utilitario.schema({string: "abc"}, object_schema, errors), {int: undefined, string: "abc"}, "ok!");
        t.deepEqual(errors, {int: [["constraint-is-undefined"]]}, "notice that int was undefined");


        t.end();

    });

    test("string to binary", function(t) {
        // example
        var object_schema = {
            cast: "binary",
            sanitize: {"hexToBin": null},
            constraints: {}
        }

        // tap test
        var errors = {};
        t.deepEqual(
                utilitario.schema("a88b8622c0ef93b2c1cf3718dec6132e", object_schema, errors, {sanitize:true}),
                new Buffer("a88b8622c0ef93b2c1cf3718dec6132e", "hex"), "ok!");


        t.end();

    });


    test("truncate", function(t) {
        // tap test
        t.equal(utilitario.truncate.maxLength("123456", 4), "1234", "maxLength -> 1234");
        t.equal(utilitario.truncate.min(101, 4), 4, "min(101,4) -> 4");
        t.equal(utilitario.truncate.min(3, 4), 3, "min(3,4) -> 3");

        var d =  new Date(),
            dd = new Date();

        dd.setTime(d.getTime() + 1000);

        t.equal(utilitario.truncate.dateAfter(d, dd).toString(), dd.toString(), "truncate.dateAfter");
        t.equal(utilitario.truncate.dateBefore(d, dd).toString(), d.toString(), "truncate.dateBefore");

        t.equal(utilitario.truncate.alphanumeric("1abfdjháöj$%&(0"), "1abfdjh__j____0", "truncate.alphanumeric");
        t.equal(utilitario.truncate.alpha("1abfdjháöj$%&(0"), "_abfdjh__j_____", "truncate.alpha");
        t.equal(utilitario.truncate.hexadecimal("0a8fuu"), "0a8f", "truncate.hexadecimal");

        t.end();

    });


    test("removeDiacritics", function(t) {
        // tap test
        t.equal(utilitario.transform.removeDiacritics("áéíóúä", 4), "aeioua", "Diacritics removed");

        t.end();

    });

    test("optional fix tests", function(t) {
        // tap test

        var object_schema = {
            "cast": "object",
            "object": {
                "nuevo_formulario": {
                    "cast": "object",
                    "constraints": {
                        "optional": true
                    },
                    "object": {
                        "num": {
                            "cast": "number",
                            "constraints": {
                                "min": [0],
                                "max": [5],
                                "optional": false
                            },
                            "messages": {
                                "min": "constraint-min-fail",
                                "max": "constraint-max-fail",
                                "optional": "constraint-optional-fail"
                            }
                        }
                    }
                }
            }
        };

        var errors = {};
        utilitario.schema({nuevo_formulario: {}}, object_schema, errors);
        console.log(errors);
        t.equal(Object.keys(errors).length, 1, "if object is defined, undefined is not allowed");

        errors = {};
        utilitario.schema({}, object_schema, errors);
        t.equal(Object.keys(errors).length, 0, "if object not defined, undefined is allowed");

        t.end();

    });

    test("futureDate", function(t) {
        var d = new Date();
        t.equal(utilitario.constraints.futureDate(d), false, "today is not future!");

        d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // tomorrow
        t.equal(utilitario.constraints.futureDate(d), true, "tomorrow is future!");

        d = new Date();
        d.setTime(d.getTime() - 24 * 60 * 60 * 1000); // yesterday
        t.equal(utilitario.constraints.futureDate(d), false, "yesterday is not future!");

        t.end();
    });

    test("pastDate", function(t) {
        var d = new Date();
        t.equal(utilitario.constraints.pastDate(d), false, "today is not past!");

        d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // tomorrow
        t.equal(utilitario.constraints.pastDate(d), false, "tomorrow is not past!");

        d = new Date();
        d.setTime(d.getTime() - 24 * 60 * 60 * 1000); // yesterday
        t.equal(utilitario.constraints.pastDate(d), true, "yesterday is past!");

        t.end();
    });

    test("tillToday", function(t) {
        var d = new Date();
        t.equal(utilitario.constraints.tillToday(d), true, "today is ok!");

        d.setTime(d.getTime() + 24 * 60 * 60 * 1000); // tomorrow
        t.equal(utilitario.constraints.tillToday(d), false, "tomorrow is ko!");

        d = new Date();
        d.setTime(d.getTime() - 24 * 60 * 60 * 1000); // yesterday
        t.equal(utilitario.constraints.tillToday(d), true, "yesterday is ok!");

        t.end();
    });

    test("nullable=false", function(t) {

      var errors = {};
      var object_schema = {
        constraints: {
          "nullable": false
        }
      };
      t.deepEqual(utilitario.schema(null, object_schema, errors), null, "ok!");
      t.deepEqual(errors, {"": [["constraint-is-null"]]}, "notice that int was undefined");


      t.end();

    })




}());
