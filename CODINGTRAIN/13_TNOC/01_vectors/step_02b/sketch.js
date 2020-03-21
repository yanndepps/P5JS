// @ts-nocheck
import { Walker } from './walker.js';

new p5(p5 => {
  let walker;
  p5.setup = () => {
    p5.createCanvas(400, 400);
    walker = new Walker(p5, 200, 200);
  };
  p5.draw = () => {
    p5.background(0);
    const { width, height } = p5;
    const dim = Math.min(width, height);
    walker.update();
    walker.show(p5, dim * 0.05);
  };
});
