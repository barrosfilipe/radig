# radig
> A tiny (65B) and fast utility to randomize a fixed amount of digits

It generates a `random` fixed amount of `digits` of your choice and returns as `String`

## Important
`radig` can't be guaranteed to be unique.

## Install

`npm i radig --save`

## Usage

```js
const radig = require('radig');

// length = 1 (default)
radig(); //=> '5'
radig(); //=> '0'

// customize length
radig(3); //=> '571'
radig(16); //=> '8547512354785473'
```

## Tests

`npm test`
