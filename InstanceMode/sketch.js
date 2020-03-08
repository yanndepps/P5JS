// @ts-nocheck
import { polygon } from './utils.js';

new p5(p5 => {
  p5.setup = () => {
    p5.createCanvas(p5.windowWidth, p5.windowHeight);
  };
  p5.windowResized = () => {
    p5.resizeCanvas(p5.windowWidth, p5.windowHeight);
  };
  p5.draw = () => {
    const { width, height } = p5;
    const dim = Math.min(width, height);

    p5.background('skyblue');
    p5.noFill();
    p5.stroke(255);
    p5.strokeWeight(dim * 0.05);

    const x = width / 2;
    const y = height / 2;
    polygon(p5, x, y, dim * 0.35, 6);
  };
});
