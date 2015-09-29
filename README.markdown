# utilitario [![Build Status](https://secure.travis-ci.org/llafuente/utilitario.png?branch=master)](http://travis-ci.org/llafuente/utilitario)

![NPM](https://nodei.co/npm/utilitario.png?compact=true)


## Introduction

Bulletproof type identification (*is*), validation (*constraints*), casting (*cast*), parse (*parse*) and sanitize/transformation (*transform*) and truncate (*truncate*) for Javascript types.

Why? Because **You shouldn't trust users/developers input. Users are evil and developers are even worst (they wont read the docs jump to your outdated examples and issue you)**


## Utilitario objectives

* Support any input anywhere: RegExp(s), Object(s), Array(s), Number(s), String(s), Date(s), Infinite, NaN, Function(s) even Native function(s), anything and it will not crash!
* Identify every Javascript primitive strictly and lossy.
* Validate any input, giving multiple-meaningful errors, not just true/false. Something to debug properly.
* Cast anything into something, and obvious but null means "*cannot be casted*".
* Optional exceptions for user input.
* Exceptions for developer input: required callbacks, invalid schema objects, etc.


## Overview

```js

var utilitario = require("utilitario");

// configure if needed

// allow NaN to be returned while casting ?
utilitario.options.allow_nan = false;

// treat numbers as valid dates
utilitario.options.timestamps_as_date = true;

// throw or return null ?
utilitario.options.throw_invalid_casts = false;

// cast.array should treat string as a possible array?
// fill the split character if you think so...
utilitario.options.cast_string_to_array_split = false;

// be extra caution with this, zero could be invalid in your app an also NaN
utilitario.options.cast_nan_to_zero = true;


// collection of functions
utilitario.is =          { /* Functions to identify input */},
utilitario.parse =       { /* parse your input from a given representation like json-string */ },
utilitario.transform =   { /* transform/sanitize your inputs*/ },
utilitario.constraints = { /* validations */ },
utilitario.truncate = { /* truncate input */ },
utilitario.cast =        { /* casts */ },

// 3 utils to conquer the world!
utilitario.validate();
utilitario.schema();
utilitario.sanitize();


```

## is

* `dateStrict` (Mixed val)
* `numberStrict` (Mixed val)
* `decimal` (Mixed val)
* `integer` (Mixed val)
* `nan` (Mixed val)
* `nullStrict` (Mixed val)
* `null` (Mixed val)
* `notNull` (Mixed val)
* `empty` (Mixed val)
* `infinite` (Mixed val)
* `notEmpty` (Mixed val)
* `regex` (Mixed val)
* `object` (Mixed val)
* `string` (Mixed val)
* `html` (Mixed val)
* `array` (Mixed val)
* `date` (Mixed val)
* `json` (Mixed val)

  Check for Object/Array begin/end string. Made for fast test, should be enough for most of the uses, considered that you will need to use JSON.parse eventually

* `jsonStrict` (val)

  use JSON.parse... it's slow. Consider use is.json

* `boolean` (Mixed val)


## cast

Force input to be valid is ok. Force to be valid and a type is even better.

When casting *null* is synonym of "cannot be casted"

* `integer` (val)
* `float` (val)
* `string` (val)
* `date` (val)
* `regex` (value)
* `object` (val)
* `array` (val)
* `boolean` (val)
* `binary` (bin)


If you want exceptions on invalid castings setup utilitario with:
* `throw_invalid_casts` = true
* `allow_nan` = true


## constraints

* `keys` (value, keys)
* `in` (needle, haystack)
* `notIn` (needle, haystack)
* `contains` (needle, haystack)
* `notContains` (needle, haystack)
* `equals` (a, b)
* `notEquals` (a, b)
* `equalsStrict` (a, b)
* `notEqualsStrict` (a, b)
* `regex` (str, pattern, modifiers)
* `notRegex` (str, pattern, modifiers)
* `tillToday` (str, date)
* `fromToday` (str, date)
* `pastDate` (str, date)
* `futureDate` (str, date)
* `dateAfter` (str, date)
* `dateBefore` (str, date)
* `email` (str)
* `url` (str)
* `alpha` (val)
* `alphanumeric` (val)
* `numeric` (val)
* `hexadecimal` (str)
* `hexColor` (str)
* `length` (val, min, max)
* `UUIDv3` (val)
* `UUIDv4` (val)
* `UUIDv5` (val)
* `min` (val, min)
* `max` (val, max)
* `ip` (str)
* `ip4` (str)
* `ip6` (str)
* `buffer` (val)

## truncate

* `maxLength` (val, max)
* `min` (val, min)
* `max` (val, max)
* `dateAfter` (str, date)
* `dateBefore` (str, date)
* `alphanumeric:` (str, replacement)
* `alpha:` (str, replacement)
* `hexadecimal:` (str, replacement)

## parse

Parse given

* `string` (val)

  Try to transform a string into the perfect javascript representation.

  Did you *notice the evilness*? useful but risky.

  * "undefined" -> undefined
  * "null" -> null
  * "true" -> true
  * "false" -> false
  * "NaN" -> NaN
  * "Infinity" -> Infinity
  * is.decimal -> cast.number

* `querystring` (val)
* `json` (val)
* `url` (urlStr, parseQueryString, slashesDenoteHost)

## transform

Transform given value into destination representation.


* `querystring` (val)

  use `qs` module

* `json` (val)

  alias of JSON.stringify

* `length` (val, max)
* `lowercase` (val)
* `uppercase` (val)
* `escapeHTML` (val)
* `stripTags` (input, allowed)
* `hexToBin` (val)
* `toCamelCase` (val)
* `camelToDash` (val)
* `toUnderscore` (val)
* `trim` (val)
* `removeDiacritics` (val)


## schema
Check anything against given schema to have fully input validation/sanitize/transform/cast solution.


```js

require("utilitario").schema(mixed, structure/*object*/, errors/*object by reference*/, options/*optional, object*/, __path/*internal*/);

// example
var errors = {},
    ret = utilitario.schema("100", {
        constraints: {
            "integer": ["integer constraint fail"],
        },
        cast: "integer"
    }, errors);

// tap test
t.deepEqual(ret, 100, "is 100 number");
t.deepEqual(errors, {}, "no errors");

```

### Structure object

#### Schema Leaf (anything not array/object)

```js
var schema = {
    // array of object
    constraints: [{
        // key: array|true
        // There are two ways to define error message, use messages or add the string as last argument.
        // messages has higher priority, at least one of those methods must define the error.
        // messages is preferred.
        constraint_function_name: [arguments, "error-optional"],

        // example
        length: [5, 20]

        // as many as you want...
    }],

    // messages list, must have the same structure as constrains.
    messages: {
        "length": "string is too long or too short"
    },

    sanitize: [{
        transform_function_name: [arguments],

        // example
        lowercase: null // null is permitted as input, meaning no arguments
        stripTags: ["<strong><b><i><em>"]
    }],

    // default value, if any constraints fail, or optional=true
    default: "anytype", // mixed

    // cast is always called, even if you use a default value.
    cast: "string",

    // empty by default
    // base path for error reporting
    base_path: ""
}
```

There is two additions to constraints: nullable and optional. Both are considered as final constrains once they are true, nothing more is tested.


#### Schema Trunk (array/object, recursive)

**Arrays**

```js
{
    cast: "array", // mandatory
    items: "Schema Leaf/Trunk object" // schema that all elements must fulfill
}

// example array of integers
var array_schema = {
    cast: "array", // mandatory
    items: {
        constraints: {
            "integer": true,
        },
        messages: {
            integer: "some elements in the array are not integers"
        },
        cast: "integer"
    }, // schema that all elements must fulfill
    base_path: "list"
}

// tap test
var errors = {};
t.deepEqual(utilitario.schema([1,2,"3"], array_schema, errors), [1,2,3], "ok!");
t.deepEqual(errors, {}, "no errors");

errors = {};
t.deepEqual(utilitario.schema(["abc"], array_schema, errors), [0], "");
t.deepEqual(errors, {"list.0": [["some elements in the array are not integers"], true]}, "with errors");
```

**Objects**

```js
{
    cast: "object", // mandatory
    object: {
        key: "Schema Leaf/Trunk object" // schema that given key must fulfill
    }
}

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

errors = {};
t.deepEqual(utilitario.schema({string: "abc"}, object_schema, errors), {int: undefined, string: "abc"}, "ok!");
t.deepEqual(errors, {int: [["is undefined"]]}, "notice that int was undefined");


```

### errors object

The combo messages (in the schema) and errors returned by schema validation can be used to write meaningful messages like in this example:

```js

var sprintf_js = require("sprintf-js"),
    i,
    errors = [],
    raw_errors = {},
    path;

// message:
// 'Minimum of %(arguments[0])s characters',

// validate
// utilitario.schema('', '', raw_errors)

for (path in raw_errors) {
    for (i = 0; i < raw_errors[path].length; ++i) {
        message = raw_errors[path][i].shift();
        console.log(sprintf_js.sprintf(message, {
            arguments: raw_errors[path][i]
            // you can add more info here, path/stack/user
        }));
    }
}

```

### options

* `filter` callback(String path, Mixed value): Boolean

Filter is used to ignore some data, that you want to ignore validation.
If you return false, the returned value be the given, and no cast will be performed.
Just ignored and continue.

* `create_properties` Boolean

Create object properties if they are not defined, set the value to default or `undefined`.
Note: This could lead to some validation errors: `default: null -- constraints: {nullable: false}`

This can create an empty/default object structure from an empty object.

## Dependencies

[node-querystring](https://github.com/visionmedia/node-querystring)

[is-html](https://github.com/sindresorhus/is-html)

[lodash.clonedeep](https://www.npmjs.org/package/lodash.clonedeep)


*Developement*

[tap](https://github.com/isaacs/node-tap) (tests)

[ass](https://github.com/lloyd/ass) (code-coverage)


## Performance

* typeof is called many times, but it should be fast enough.
* has many internal calls to avoid code duplication, in the future those call could be inlined see [funlinify](https://github.com/llafuente/funlinify)

## Install

With [npm](http://npmjs.org) do:

```sh

npm install utilitario


```

## test (travis-ci ready!)


```sh

npm test
// or
cd /test
node test-class.js

```

## REPL

```js
{ options:
   { allow_nan: false,
     timestamps_as_date: true,
     throw_invalid_casts: false,
     cast_string_to_array_split: false,
     cast_nan_to_zero: true },
  is:
   { dateStrict: [Function],
     numberStrict: [Function],
     decimal: [Function],
     integer: [Function],
     nan: [Function],
     nullStrict: [Function],
     null: [Function],
     notNull: [Function],
     empty: [Function],
     infinite: [Function],
     notEmpty: [Function],
     regex: [Function],
     object: [Function],
     string: [Function],
     html: [Function],
     array: [Function],
     date: [Function],
     json: [Function],
     jsonStrict: [Function],
     boolean: [Function] },
  parse:
   { string: [Function],
     querystring: [Function],
     json: [Function],
     url: [Function] },
  transform:
   { querystring: [Function],
     json: [Function],
     length: [Function],
     lowercase: [Function],
     uppercase: [Function],
     escapeHTML: [Function],
     stripTags: [Function],
     hexToBin: [Function],
     toCamelCase: [Function],
     camelToDash: [Function],
     toUnderscore: [Function],
     trim: [Function],
     removeDiacritics: [Function] },
  constraints:
   { keys: [Function],
     in: [Function],
     notIn: [Function],
     contains: [Function],
     notContains: [Function],
     equals: [Function],
     notEquals: [Function],
     equalsStrict: [Function],
     notEqualsStrict: [Function],
     regex: [Function],
     notRegex: [Function],
     tillToday: [Function],
     fromToday: [Function],
     pastDate: [Function],
     futureDate: [Function],
     dateAfter: [Function],
     dateBefore: [Function],
     email: [Function],
     url: [Function],
     alpha: [Function],
     alphanumeric: [Function],
     numeric: [Function],
     hexadecimal: [Function],
     hexColor: [Function],
     minLength: [Function],
     maxLength: [Function],
     length: [Function],
     UUIDv3: [Function],
     UUIDv4: [Function],
     UUIDv5: [Function],
     min: [Function],
     max: [Function],
     ip: [Function],
     ip4: [Function],
     ip6: [Function],
     buffer: [Function],
     containUppercase: [Function],
     containLowercase: [Function],
     constainNumber: [Function],
     constainLetter: [Function],
     noSpaces: [Function],
     maxDecimals: [Function] },
  truncate:
   { maxLength: [Function],
     min: [Function],
     max: [Function],
     dateAfter: [Function],
     dateBefore: [Function],
     alphanumeric: [Function],
     alpha: [Function],
     hexadecimal: [Function] },
  cast:
   { integer: [Function],
     float: [Function],
     string: [Function],
     date: [Function],
     regex: [Function],
     object: [Function],
     array: [Function],
     boolean: [Function],
     binary: [Function],
     number: [Function] },
  validate: [Function: __validate],
  schema: [Function: __schema],
  sanitize: [Function: __sanitize] }
```


## license


MIT.
