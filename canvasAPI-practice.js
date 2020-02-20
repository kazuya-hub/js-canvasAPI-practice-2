'use strict';

(() => {
    const CANVAS_WIDTH = 1280;
    const CANVAS_HEIGHT = 800;

    /** @type {HTMLCanvasElement} */
    const canvas = document.getElementById('canvas');
    canvas.width = CANVAS_WIDTH;
    canvas.height = CANVAS_HEIGHT;
    const ctx = canvas.getContext('2d');

    ctx.beginPath();
    ctx.fillRect(100, 100, 200, 200);
})();
