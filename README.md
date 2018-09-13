# react-quotes
`react-quotes` is a dependency-free quotes carousel for React!

[![package](https://img.shields.io/github/package-json/v/CharlesStover/react-quotes-carousel.svg)](https://travis-ci.com/CharlesStover/react-quotes-carousel/)
[![build](https://api.travis-ci.com/CharlesStover/react-quotes-carousel.svg)](https://travis-ci.com/CharlesStover/react-quotes-carousel/)
[![downloads](https://img.shields.io/npm/dt/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![minified size](https://img.shields.io/bundlephobia/min/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)
[![minzipped size](https://img.shields.io/bundlephobia/minzip/react-quotes-carousel.svg)](https://www.npmjs.com/package/react-quotes-carousel)

![screenshot](https://user-images.githubusercontent.com/343837/44218050-7d7a2000-a13e-11e8-9fde-a64fc804262d.gif)

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
