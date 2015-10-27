# screen-type [![Build Status](https://travis-ci.org/hemanth/screen-type.svg?branch=master)](https://travis-ci.org/hemanth/screen-type)

> Simple util to detect the screen-type.

__It might be on of:__

* Standard

* SD

* HD

* FullHD

* UltraHD

* QuadHD

* Retina


## Install

```
$ npm install --save screen-type
```


## Usage

```js
var screenType = require('screen-type');

screenType.HD //true.

Object.keys(screenType);

// ["Standard", "SD", "HD", "FullHD", "UltraHD", "QuadHD", "Retina"]
```

## License

MIT © [Hemanth.HM](http://h3manth.com)
