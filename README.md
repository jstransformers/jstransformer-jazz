# jstransformer-jazz

[Jazz](https://github.com/shinetech/jazz) support for [JSTransformer](https://github.com/jstransformers/jstransformer).

[![Build Status](https://img.shields.io/travis/jstransformers/jstransformer-jazz/master.svg)](https://travis-ci.org/jstransformers/jstransformer-jazz)
[![Coverage Status](https://img.shields.io/codecov/c/github/jstransformers/jstransformer-jazz/master.svg)](https://codecov.io/gh/jstransformers/jstransformer-jazz)
[![Dependency Status](https://img.shields.io/david/jstransformers/jstransformer-jazz/master.svg)](http://david-dm.org/jstransformers/jstransformer-jazz)
[![Greenkeeper badge](https://badges.greenkeeper.io/jstransformers/jstransformer-jazz.svg)](https://greenkeeper.io/)
[![NPM version](https://img.shields.io/npm/v/jstransformer-jazz.svg)](https://www.npmjs.org/package/jstransformer-jazz)

## Installation

    npm install jstransformer-jazz

## API

```js
var jazz = require('jstransformer')(require('jstransformer-jazz'))

jazz.renderAsync('Hello, {name}!', { name: 'World'}, function(err, data) {
  data.body
  //=> 'Hello, World!'
});
```

## License

MIT
