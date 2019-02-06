# Quotes Carousel for React [![Tweet](https://img.shields.io/twitter/url/http/shields.io.svg?style=social)](https://twitter.com/intent/tweet?text=Add%20a%20beautiful%20quotes%20carousel%20to%20your%20React%20application.%20pic.twitter.com/Mdv1V6L8Ih&url=https://github.com/CharlesStover/react-quotes-carousel&via=CharlesStover&hashtags=react,reactjs,javascript,webdev,webdeveloper,webdevelopment)

`react-quotes-carousel` is a dependency-free quotes carousel for React!

[![version](https://img.shields.io/npm/v/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![minified size](https://img.shields.io/bundlephobia/min/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![downloads](https://img.shields.io/npm/dt/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![build](https://api.travis-ci.com/CharlesStover/react-quotes-carousel.svg)](https://travis-ci.com/CharlesStover/react-quotes-carousel/)

[![screenshot](https://user-images.githubusercontent.com/343837/44218050-7d7a2000-a13e-11e8-9fde-a64fc804262d.gif)](https://www.npmjs.com/package/react-quotes-carousel)

## Install

* `npm install react-quotes-carousel --save` or
* `yarn add react-quotes-carousel`

## Props

* animationDuration (optional)

  The duration of the sliding animation, in milliseconds. Default: `1500`

* className (optional)

  A CSS class name for the root element that contains the slider.

* delay (optional)

  The delay before sliding to the next quote, in milliseconds. Default: `5000`

* quotes

  An array of quotes to display in the slider.
  Each quote should be in the format:

```
interface Quote {
  author: string;
  company: string;
  image: string;
  quote: string;
}
```

* shuffle (optional)

  Shuffles the quotes before rendering them. Default: `false`
