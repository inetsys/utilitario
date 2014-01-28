

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

┌────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│type                ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│                    ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│undefined           ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Undefined]  ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│null                ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Null]       ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│0                   ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Number]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│100                 ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Number]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│'100'               ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object String]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│''                  ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object String]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│{}                  ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Object]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│{ xx: true }        ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Object]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[]                  ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Array]      ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[ 10 ]              ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Array]      ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│////                ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object RegExp]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│2014 01 01 ...┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Date]       ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│NaN                 ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Number]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│Infinity            ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Number]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│-Infinity           ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object Number]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
├────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│'{"json_test":true}'┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
│[object String]     ┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
└────────────────────┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘
┬──────┬──────┬───────┬───────┬─────┬──────┬─────┬─────┬─────┬────────┬─────┬─────┬──────┬──────┬─────┬─────┬─────┐
│date  │number│decimal│integer│nan  │null  │null │not  │empty│infinite│not  │regex│object│string│array│date │json │
│Strict│Strict│       │       │     │Strict│     │Null │     │        │Empty│     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│true  │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│false   │true │false│false │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │true   │true   │false│false │false│true │false│false   │true │false│false │true  │false│true │true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │true │false│true │false   │false│false│false │true  │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │true │false   │false│false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │true │false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │true │true  │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│true  │false │false  │false  │false│false │false│true │false│false   │true │false│true  │false │false│true │false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │true │false │true │false│true │false   │false│false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │true  │true   │true   │false│false │false│true │false│true    │true │false│false │false │false│false│false│
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┼──────┼──────┼───────┼───────┼─────┼──────┼─────┼─────┼─────┼────────┼─────┼─────┼──────┼──────┼─────┼─────┼─────┤
│false │false │false  │false  │false│false │false│true │false│false   │true │false│false │true  │false│false│true │
│      │      │       │       │     │      │     │     │     │        │     │     │      │      │     │     │     │
┴──────┴──────┴───────┴───────┴─────┴──────┴─────┴─────┴─────┴────────┴─────┴─────┴──────┴──────┴─────┴─────┴─────┘

```
If you like that table, you can do it yourself using: [cli-table](https://github.com/LearnBoost/cli-table)



## cast

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



## Dependencies

[node-querystring](https://github.com/visionmedia/node-querystring)


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
