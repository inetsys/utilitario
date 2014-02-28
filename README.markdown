# utilitario [![Build Status](https://secure.travis-ci.org/llafuente/utilitario.png?branch=master)](http://travis-ci.org/llafuente/utilitario)

![NPM](https://nodei.co/npm/utilitario.png?compact=true)

## note

module is stable but not fully featured yet.

## Introduction

Bulletproof identification (is), validation (constraints) and casting (cast).

Throw him everything you have got: RegExp(s), Object(s), Array(s), Number(s), String(s), Date(s), Infinite(s), NaN(s), Function(s) even Native function(s), anything and it will not crash!
What is the main objective of this module?
* Identify every javascript primitive.
* Validate any input, giving multiple errors, not just true/false. Something to debug properly.
* cast anything into something, obvious but null means "cannot be casted".
* optional throw for user input. Like allow_nan = false.
* throw for developer input. Like required callbacks, invalid schema objects, etc.

## Overview

```js

require("utilitario");

{ options:
    {
        allow_nan: false, // allow NaN to be returned while casting ?
        timestamps_as_date: true, // treat numbers as valid dates
        throw_invalid_casts: false, // self explanatory
        cast_string_to_array_split: false, // cast.array should treat string as possible array? fill the split character
        cast_nan_to_zero: true // be extra caution with this, zero could be invalid in your app an also NaN
    },
    is:          { /* Function to identify input */},
    parse:       { /* parse your input from a given representation like json-string */ },
    transform:   { /* transform/sanitize your inputs*/ },
    constraints: {/* validations */ },
    cast:        {/* casts */ },
    validate: [Function: __validate],
    schema: [Function: __schema],
    sanitize: [Function: __sanitize]
}

```

## is

functions included
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
* array(val)
* date(val)
* json(val)

The following table show what happens in every input you can throw at those functions.


```

┌─────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│type                 │date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│                     │Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
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
If you like that table, you can do it yourself using: [cli-table](https://github.com/LearnBoost/cli-table) :)



## cast

Force input to be valid is ok. But force input to be a type is even better.
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
Check anything against given schema.
Mix every functionality in "is", "constraints" & "cast" to give a fully input validation solution.


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

## license


MIT.
