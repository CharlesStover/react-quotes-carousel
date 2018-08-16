require('jsdom-global')();

global.cancelAnimationFrame = () => {};
global.requestAnimationFrame = () => 0;
global.window.cancelAnimationFrame = () => {};
global.window.requestAnimationFrame = () => 0;
