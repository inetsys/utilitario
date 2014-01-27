(function () {
    "use strict";
    require('ass');

    var $ = require("../index.js"),
        util = require("util"),
        tap = require("tap"),
        test = tap.test;

        //console.log("util instance", util.inspect(instance, {depth: 5, colors: true}));


    test("__rtypeof & __typed_clone", function (t) {
        t.equal(__rtypeof(10), "number", "number");
        t.deepEqual(__typed_clone(mix2, __rtypeof(mix2)), mix2, "clone mix2");

        t.end();
    });
}());