

# utilitario [![Build Status](https://secure.travis-ci.org/llafuente/utilitario.png?branch=master)](http://travis-ci.org/llafuente/utilitario)

## note

module is stable but not full featured yet.

## Introduction

Bulletproof identification (is), validation (constraints) and casting (cast).

Throw him everything you have got: RegExp(s), Object(s), Array(s), Number(s), String(s), Date(s), Infinite(s), NaN(s), Function(s) even Native function(s), anything and it will not crash!
That's the main objective of this module:
* Identify every javascript primitive.
* Validate any input, respond false is not an acceptable input.
* cast anything into something.
* Will throw if you configure it to do so. Like allow_nan = false, very useful for development.

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

The next table show what happens in every input you can throw at those functions.

```
┌─────────────────────────────────────────┬────────┬────────┬─────────┬─────────┬───────┬────────┬───────┬───────┬───────┬──────────┬───────┬───────┬────────┬────────┬───────┬───────┬───────┐
│ type                                    │ date   │ number │ decimal │ integer │ nan   │ null   │ null  │ not   │ empty │ infinite │ not   │ regex │ object │ string │ array │ date  │ json  │
│                                         │ Strict │ Strict │         │         │       │ Strict │       │ Null  │       │          │ Empty │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ undefined                               │ false  │ false  │ false   │ false   │ false │ false  │ true  │ false │ true  │ false    │ false │ false │ false  │ false  │ false │ false │ false │
│ [object Undefined]                      │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ null                                    │ false  │ false  │ false   │ false   │ false │ true   │ true  │ false │ true  │ false    │ false │ false │ false  │ false  │ false │ false │ false │
│ [object Null]                           │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ 0                                       │ false  │ true   │ true    │ true    │ false │ false  │ true  │ false │ true  │ false    │ false │ false │ false  │ false  │ false │ false │ false │
│ [object Number]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ 100                                     │ false  │ true   │ true    │ true    │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ false  │ false  │ false │ true  │ false │
│ [object Number]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ '100'                                   │ false  │ false  │ true    │ true    │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ false  │ true   │ false │ true  │ true  │
│ [object String]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ ''                                      │ false  │ false  │ false   │ false   │ false │ false  │ true  │ false │ true  │ false    │ false │ false │ false  │ true   │ false │ false │ false │
│ [object String]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ {}                                      │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ true  │ false    │ false │ false │ true   │ false  │ false │ false │ false │
│ [object Object]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ { xx: true }                            │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ true   │ false  │ false │ false │ false │
│ [object Object]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ []                                      │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ true  │ false    │ false │ false │ true   │ false  │ true  │ false │ false │
│ [object Array]                          │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ [ 10 ]                                  │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ true   │ false  │ true  │ false │ false │
│ [object Array]                          │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ ////                                    │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ false │ false    │ true  │ true  │ true   │ false  │ false │ false │ false │
│ [object RegExp]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ Wed Jan 01 2014 01:00:00 GMT+0100 (CET) │ true   │ false  │ false   │ false   │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ true   │ false  │ false │ true  │ false │
│ [object Date]                           │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ NaN                                     │ false  │ true   │ true    │ true    │ true  │ false  │ true  │ false │ true  │ false    │ false │ false │ false  │ false  │ false │ false │ false │
│ [object Number]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ Infinity                                │ false  │ true   │ true    │ true    │ false │ false  │ false │ true  │ false │ true     │ true  │ false │ false  │ false  │ false │ false │ false │
│ [object Number]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ -Infinity                               │ false  │ true   │ true    │ true    │ false │ false  │ false │ true  │ false │ true     │ true  │ false │ false  │ false  │ false │ false │ false │
│ [object Number]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
├─────────────────────────────────────────┼────────┼────────┼─────────┼─────────┼───────┼────────┼───────┼───────┼───────┼──────────┼───────┼───────┼────────┼────────┼───────┼───────┼───────┤
│ '{"json_test":true}'                    │ false  │ false  │ false   │ false   │ false │ false  │ false │ true  │ false │ false    │ true  │ false │ false  │ true   │ false │ false │ true  │
│ [object String]                         │        │        │         │         │       │        │       │       │       │          │       │       │        │        │       │       │       │
└─────────────────────────────────────────┴────────┴────────┴─────────┴─────────┴───────┴────────┴───────┴───────┴───────┴──────────┴───────┴───────┴────────┴────────┴───────┴───────┴───────┘
```
If you like that table, you can do it yourself using: [cli-table](https://github.com/LearnBoost/cli-table)



## Dependencies

None, very rare... I know.


*Developement*

[tap](https://github.com/isaacs/node-tap) (tests)

[ass](https://github.com/lloyd/ass) (code-coverage)


## Performance

* typeof is called many times, but it should be fast enough.
* has many internal calls to avoid code duplication, could perform faster, pull request :)
* is.json use JSON.parse use it with caution, maybe it's better to parse directly.

## Install

With [npm](http://npmjs.org) do:

```

npm install node-class

```

## test (travis-ci ready!)


```

npm test
// or
cd /test
node test-class.js

```

## license


MIT.
