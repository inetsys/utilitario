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


    test("print cast table", function (t) {
        console.log(utilitario.cast);
        console.log(table.toString());
        t.end();
    });



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