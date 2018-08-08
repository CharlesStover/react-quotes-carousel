require('jsdom-global')();

global.cancelAnimationFrame = i => global.window.clearTimeout(i);
global.requestAnimationFrame = f => global.window.setTimeout(f, 0);
global.window.cancelAnimationFrame = global.cancelAnimationFrame;
global.window.requestAnimationFrame = global.requestAnimationFrame;
