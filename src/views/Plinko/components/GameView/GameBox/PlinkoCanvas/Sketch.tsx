import React from 'react';
import { ReactP5Wrapper, Sketch, SketchProps } from "react-p5-wrapper";
import Matter from 'matter-js';
import Particle from './Particle';
import Plinko from './Plinko';
import Boundary from './Boundary';

const { Engine, World, Events } = Matter;

let engine;
let world;
const width = 500;  // width of canvas
const height = 500;  // height of canvas.
const particles = [];
const plinkos = [];
const bounds = [];
const INIT_COLS = 3;
let cols = 3; // số cột.
const rows = 8;  // số hàng plinko.

const sketch: Sketch<SketchProps> = p5 => {

  // eslint-disable-next-line no-param-reassign
  // p5.preload = () => {
  //   // ding = p5.loadSound('./pin.mp3');
  // }

  // eslint-disable-next-line no-param-reassign
  p5.setup = () => {
    p5.createCanvas(width, height);
    engine = Engine.create();
    // eslint-disable-next-line prefer-destructuring
    world = engine.world;

    function collision(event) {  // thêm âm thanh khi va chạm.
      const { pairs } = event;
      for (let i = 0; i < pairs.length; i++) {
        const labelA = pairs[i].bodyA.label;
        const labelB = pairs[i].bodyB.label;
        if (labelA === 'particle' && labelB === 'plinko') {
          // audio.play();
        }
        if (labelA === 'plinko' && labelB === 'particle') {
          // audio.play();
        }
      }
    }

    Events.on(engine, 'collisionStart', collision);
    // p5.ellipse
    newParticle(p5);

    // tạo particle và plinko.
    const maxCols = INIT_COLS + rows - 1;


    const maxPlinkoWidth = 12 * 1 * 10;
    const spacing = (width - maxPlinkoWidth) / (maxCols - 1);
    const maxColsSpacing = INIT_COLS + 1;
    console.log('spacing', spacing);
    for (let j = 0; j < rows; j++) {
      console.log(Math.ceil(maxColsSpacing - 0.5 * (j + 1)));
      const maxSpacing = (maxCols - cols) * spacing / 2 + Math.ceil(maxColsSpacing - 0.5 * (j + 1)) * (12 * 1);
      // console.log("maxSpacing", maxSpacing)
      for (let i = 0; i < cols; i++) {
        const x = i * spacing + maxSpacing;
        const y = spacing + j * spacing;
        const p = new Plinko({ x, y, r: 6, world, sketch: p5 });
        console.log('p', p);
        plinkos.push(p);
      }
      cols++;
    }

    //  tạo thùng hứng
    const bound = new Boundary({ x: width / 2, y: height + 50, w: width, h: 100, world, sketch: p5 });
    bounds.push(bound);

    for (let i = 0; i < cols + 2; i++) {
      const x = i * spacing;
      const h = 100;
      const w = 10;
      const y = height - h / 2;
      const b = new Boundary({ x, y, w, h, world, sketch: p5 });
      bounds.push(b);
    }
  }

  // eslint-disable-next-line no-param-reassign
  p5.draw = () => {
    p5.background(39, 38, 44);
    if (p5.frameCount % 20 === 0) {  // event bắt đầu rơi hạt.
      newParticle(p5);
    }

    Engine.update(engine, 1000 / 30); // cập nhật số lần tạo ra particle mới.
    for (let i = 0; i < particles.length; i++) {
      particles[i].show();
      // eslint-disable-next-line no-console
      if (particles[i].isOffScreen()) {
        World.remove(world, particles[i].body);
        particles.splice(i, 1);
        i--;
      }
    }

    // show các plinko ( chướng ngại vật ).
    for (let i = 0; i < plinkos.length; i++) {
      plinkos[i].show();
    }
    // show các boundaries ( thùng chứa ).
    for (let i = 0; i < bounds.length; i++) {
      bounds[i].show();
    }
  };
};

function newParticle(p5) {
  const p = new Particle({ x: width / 2, y: -100, r: 9, world, sketch: p5 });
  particles.push(p);
}

const SketchComp: React.FC = () => {
  return <ReactP5Wrapper sketch={sketch} />;
}

export default SketchComp;