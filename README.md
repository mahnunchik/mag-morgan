# mag-morgan

[Mag](https://github.com/mahnunchik/mag) is the streaming logger for NodeJS.

`mag-morgan` is [morgan](https://github.com/expressjs/morgan) adapted for use with [mag](https://github.com/mahnunchik/mag) logger.

## Installation

```
$ npm install mag-morgan --save
```

## Usage

You can use `mag-morgan` as you used `morgan` before.

```
var express = require('express');
var app = express();
var httpLogger = require('mag-morgan');

app.use(httpLogger('combined'));
```

## Motivation

Get a well-known [HTTP logger](https://github.com/expressjs/morgan) with all features of [mag](https://github.com/mahnunchik/mag#use-cases) logger.

## Example

You can find sample in [example](https://github.com/mahnunchik/mag-morgan/tree/master/example) folder of this repository.

## License

[MIT](https://github.com/mahnunchik/mag-morgan/blob/master/LICENSE)
