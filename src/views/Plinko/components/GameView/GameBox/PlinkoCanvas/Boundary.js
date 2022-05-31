import { World, Bodies } from 'matter-js'

const options = {
  isStatic: true,
}

export default class Boundary {
  constructor({ x, y, w, h, world, sketch }) {
    this.body = Bodies.rectangle(x, y, w, h, options)
    this.w = w
    this.h = h
    this.sketch = sketch
    World.add(world, this.body)
  }

  show() {
    // thùng hứng bóng.
    this.sketch.fill(150)
    this.sketch.stroke(255)
    const pos = this.body.position
    this.sketch.push()
    this.sketch.translate(pos.x, pos.y)
    // this.sketch.rectMode(this.sketch.CENTER) // đầu trụ tròn từng cột hứng
    this.sketch.rect(0, 0, this.w, this.h)
    this.sketch.pop()
  }
}
