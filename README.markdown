# utilitario [![Build Status](https://secure.travis-ci.org/llafuente/utilitario.png?branch=master)](http://travis-ci.org/llafuente/utilitario)

![NPM](https://nodei.co/npm/utilitario.png?compact=true)

## Preface

module is stable but not fully featured yet.


## Introduction

Bulletproof identification (*is*), validation (*constraints*), casting (*cast*), parse (*parse*) and sanitize/transformation (*transform*).

**You shouldn't trust user-input. Users are evil.**


## Utilitario objectives

* Support any user-input in any function: RegExp(s), Object(s), Array(s), Number(s), String(s), Date(s), Infinite(s), NaN(s), Function(s) even Native function(s), anything and it will not crash!
* Identify every Javascript primitive strictly and lossy.
* Validate any input, giving multiple errors, not just true/false. Something to debug properly.
* Cast anything into something, obvious but null means "cannot be casted".
* Optionals throws for user input. Like allow_nan = false.
* Throw for developer input. Like required callbacks, invalid schema objects, etc.


## Overview

```js

var utilitario = require("utilitario");

utilitario.options.xxx = true; /*set option*/

// options:
utilitario.options = {
    // allow NaN to be returned while casting ?
    allow_nan: false,

    // treat numbers as valid dates
    timestamps_as_date: true,

    // self explanatory
    throw_invalid_casts: false,

    // cast.array should treat string as possible array? fill the split character if you think so...
    cast_string_to_array_split: false,

    // be extra caution with this, zero could be invalid in your app an also NaN
    cast_nan_to_zero: true
};

// collection of functions ordered
utilitario.is =          { /* Functions to identify input */},
utilitario.parse =       { /* parse your input from a given representation like json-string */ },
utilitario.transform =   { /* transform/sanitize your inputs*/ },
utilitario.constraints = {/* validations */ },
utilitario.cast =        {/* casts */ },

// 3 utils to conquer the world!
utilitario.validate();
utilitario.schema();
utilitario.sanitize();


```

## is

* dateStrict(val)
* numberStrict(val)
* decimal(val)
* integer(val)
* nan(val)
* nullStrict(val)
* null(val)
* notNull(val)
* empty(val)
* infinite(val)
* notEmpty(val)
* regex(val)
* object(val)
* string(val)
* html(val)
* array(val)
* date(val)
* json(val)
* boolean(val)


The following table show the relation input/output of every function above.


```

┌─────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│input                │date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│type                 │Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│undefined            │false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│[object Undefined]   │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│null                 │false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│[object Null]        │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│0                    │false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│[object Number]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│100                  │false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│[object Number]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│'100'                │false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│[object String]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│''                   │false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│[object String]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│{}                   │false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│[object Object]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│{ xx: true }         │false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│[object Object]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│[]                   │false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│[object Array]       │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│[ 10 ]               │false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│[object Array]       │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│////                 │false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│[object RegExp]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│2014 01 01 ...       │true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│[object Date]        │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│NaN                  │false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│[object Number]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│Infinity             │false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│[object Number]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│-Infinity            │false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│[object Number]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
├─────────────────────┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│'{"json_test":true}' │false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│[object String]      │      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
└─────────────────────┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘


```
If you like that table, you can do it yourself using: [LearnBoost/cli-table](https://github.com/LearnBoost/cli-table) :)



## cast

Force input to be valid is ok. Force to be valid and a type is even better.
Like always the following table show the behavior of cast functions given any input. *null* is used as "cannot be casted" output.

```
┌──────────────────┬───┬─────┬──────────┬──────────┬──────┬──────────────────────┬──────────────┐
│type              │int│float│string    │date      │regex │object                │array         │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│100               │100│100  │'100'     │1970 01 01│null  │null                  │null          │
│[object Number]   │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│'100'             │100│100  │'100'     │100 01 01 │/100/ │null                  │null          │
│[object String]   │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│null              │0  │0    │null      │null      │null  │null                  │null          │
│[object Null]     │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│undefined         │0  │0    │null      │null      │null  │null                  │null          │
│[object Undefined]│   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│{ x: true }       │0  │0    │null      │null      │null  │{ x: true }           │null          │
│[object Object]   │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│[]                │0  │0    │''        │null      │null  │{}                    │[]            │
│[object Array]    │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│null              │0  │0    │null      │null      │null  │null                  │null          │
│[object Null]     │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│NaN               │0  │0    │null      │null      │null  │null                  │null          │
│[object Number]   │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│'ok!!'            │0  │0    │'ok!!'    │null      │/ok!!/│null                  │null          │
│[object String]   │   │     │          │          │      │                      │              │
├──────────────────┼───┼─────┼──────────┼──────────┼──────┼──────────────────────┼──────────────┤
│[ 500, , 100 ]    │0  │0    │'500,,100'│null      │null  │{ '0': 500, '2': 100 }│[ 500, , 100 ]│
│[object Array]    │   │     │          │          │      │                      │              │
└──────────────────┴───┴─────┴──────────┴──────────┴──────┴──────────────────────┴──────────────┘
```


## schema
Check anything against given schema to have fully input validation/sanitize/transform/cast solution.


```js

require("utilitario").schema(mixed, structure/*object*/, errors/*array by reference*/, options/*optional, object*/, __path/*internal*/);

// example
var errors = [],
    ret = utilitario.schema("100", {
        constraints: {
            "integer": ["integer constraint fail"],
        },
        cast: "integer"
    }, errors);

// tap test
t.deepEqual(ret, 100, "is 100 number");
t.deepEqual(errors, [], "no errors");

```

Structure object

**Schema Leaf (anything not array/object)**

```js
var schema = {
    // array of object
    constraints: [{
        // key: array, the last item MUST be a string, that represent the error string
        // the items before the error are the arguments for the constraint
        constraint_function_name: [arguments, "error"],

        // example
        length: [5, 20, "string is too long or too short"]

        // as many as you want...
    }],

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
}
```

There is two additions to constraints: nullable and optional. Both are considered as final constrains once they are true, nothing more is tested.


**Schema Trunk (array/object, those that are recursive)**

**array**
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
            "integer": ["some elements in the array are not integers"],
        },
        cast: "integer"
    } // schema that all elements must fulfill
}

// tap test
var errors = [];
t.deepEqual(utilitario.schema([1,2,"3"], array_schema, errors), [1,2,3], "ok!");
t.deepEqual(errors, [], "no errors");

errors = [];
t.deepEqual(utilitario.schema(["abc"], array_schema, errors), [0], "");
t.deepEqual(errors, ["some elements in the array are not integers"], "with errors");
```

**object**
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
var errors = [];
t.deepEqual(utilitario.schema({int: 10, string: "abc"}, object_schema, errors), {int: 10, string: "abc"}, "ok!");

errors = [];
t.deepEqual(utilitario.schema({string: "abc"}, object_schema, errors), {int: undefined, string: "abc"}, "ok!");
t.deepEqual(errors, ["int is undefined"], "notice that int was undefined");


```

## Dependencies

[node-querystring](https://github.com/visionmedia/node-querystring)

[object-enhancements](https://github.com/llafuente/object-enhancements)

[array-enhancements](https://github.com/llafuente/array-enhancements)


*Developement*

[tap](https://github.com/isaacs/node-tap) (tests)

[ass](https://github.com/lloyd/ass) (code-coverage)


## Performance

* typeof is called many times, but it should be fast enough.
* has many internal calls to avoid code duplication, in the future those call could be inlined.
* is.json use JSON.parse, use it with caution, maybe it's better to parse directly.

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

luis@luis-dev:~/noboxout/node-expressionist$ node
> require("utilitario")
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
     trim: [Function] },
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
     dateAfter: [Function],
     dateBefore: [Function],
     email: [Function],
     url: [Function],
     alpha: [Function],
     alphanumeric: [Function],
     numeric: [Function],
     hexadecimal: [Function],
     hexColor: [Function],
     length: [Function],
     UUIDv3: [Function],
     UUIDv4: [Function],
     UUIDv5: [Function],
     min: [Function],
     max: [Function],
     ip: [Function],
     ip4: [Function],
     ip6: [Function] },
  cast:
   { integer: [Function],
     float: [Function],
     string: [Function],
     date: [Function],
     regex: [Function],
     object: [Function],
     array: [Function],
     binary: [Function] },
  validate: [Function: __validate],
  schema: [Function: __schema],
  sanitize: [Function: __sanitize] }
>

```


## license


MIT.
