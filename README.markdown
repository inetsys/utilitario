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
