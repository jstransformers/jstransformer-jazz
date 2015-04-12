# jstransformer-jazz

[Jazz](https://github.com/shinetech/jazz) support for [JSTransformer](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jazz/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jazz)
[![Coverage Status](https://img.shields.io/coveralls/jstransformers/jstransformer-jazz/master.svg)](https://coveralls.io/r/jstransformers/jstransformer-jazz?branch=master)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jazz.svg)](https://www.npmjs.org/package/jstransformer-jazz)

## Installation

    npm install jstransformer-jazz

## API

```js
var jazz = require('jstransformer')(require('jstransformer-jazz'))

jazz.renderAjax('Hello, {name}!', { name: 'World'}, function(err, data) {
  data.body
  //=> 'Hello, World!'
});
```

## License

MIT
