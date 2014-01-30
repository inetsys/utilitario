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
                oks: ["decimal", "integer", "notNull", "notEmpty", "string", "date", "json"]
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
                oks: ["string", "notNull", "notEmpty", "json"]
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


    //test("print is table", function (t) {
    //    console.log(utilitario.is);
    //    console.log(table.toString());
    //    t.end();
    //});


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
        t.equal(constraints.length("abasd4sa5dfdsfs6a516dsc", 1, 10), false, "length");

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
    })





/*
.forEach(function(test) {
    var i;

    console.log("test ", test);
    for (i in module.exports.is) {
        console.log("is - ", i , module.exports.is[i](test));
    }

    for (i in module.exports.constraints) {
        switch(i) {
        case "length":
            console.log("constraints - ", i , module.exports.constraints[i](test, 10, 100));
            break;
        case "min":
        case "max":
            console.log("constraints - ", i , module.exports.constraints[i](test, 10));
            break;
        case "regex":
        case "notRegex":
            console.log("constraints - ", i , module.exports.constraints[i](test, new RegExp("//")));
            break;
        case "dateAfter":
        case "dateBefore":
            console.log("constraints - ", i , module.exports.constraints[i](test, new Date()));
            break;
        default:
            console.log("constraints - ", i , module.exports.constraints[i](test));
        }
    }

    for (i in module.exports.cast) {
        console.log("cast - ", i , module.exports.cast[i](test));
    }
});

process.exit();
/*
[{
  value: "100",
  cast: {
    string: "100",
    int: 100
    json: {} //stringify
    object //parse json if needed, array to object
  },
  is: {
    string: true,
    email: false,
    length: [0, 5, true],
    min: [50, true],
    max: [150, true],
    int: true,
    float: true,
    decimal: true,
    object: false,
    array: false,
    date: false,
    dateAfter
    dateBefore
    dateFuture: false,
    datePast: false,
    timestamp: false,
    alpha: false,
    numeric: true,
    alphanum: true,
    lowercased: true,
    uppercased: true,
    null: false,
    undefined: false,
    notNull: true,
    empty: //php empty
    equal: ["xxx", false],
    in: [["x", "y"], false]
    notIn: [["x", "y"], false]
    contains: ["0", true]
    notContains: ["0", false]
    regex
    notRegex
    UUID
    UUIDv3
    UUIDv4
    UUIDv5
    divisible
    mailto
    html
    json
  }
},]

invalid_emails = [
    "invalidemail@",
    "invalid.com",
    "@invalid.com"
];

valid_emails = [
    "foo@bar.com",
    "x@x.x",
    "foo@bar.com.au",
    "foo+bar@bar.com"
];


invalid_urls = [
    "xyz://foobar.com", //Only http, https and ftp are valid
    "invalid/",
    "invalid.x",
    "invalid.",
    ".com",
    "http://com/",
    "http://300.0.0.1/",
    "mailto:foo@bar.com"
];

valid_urls = [
    "foobar.com",
    "www.foobar.com",
    "foobar.com/",
    "valid.au",
    "http://www.foobar.com/",
    "https://www.foobar.com/",
    "ftp://www.foobar.com/",
    "http://www.foobar.com/~foobar",
    "http://user:pass@www.foobar.com/",
    "http://127.0.0.1/",
    "http://10.0.0.0/",
    "http://189.123.14.13/",
    "http://duckduckgo.com/?q=%2F",
    "http://foobar.com/t$-_.+!*\"(),",
    "http://localhost:3000/"
];

invalid_ips = [
    "abc",
    "256.0.0.0",
    "0.0.0.256"
];

valid_ips = [
            "127.0.0.1",
            "0.0.0.0",
            "255.255.255.255",
            "1.2.3.4"
];
*/


}());