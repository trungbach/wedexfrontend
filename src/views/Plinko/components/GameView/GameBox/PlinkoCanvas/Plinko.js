import { World, Bodies } from 'matter-js'

const options = {
  restitution: 1,
  friction: 0,
  isStatic: true,
}

export default class Plinko {
  constructor({ x, y, r, world, sketch }) {
    this.body = Bodies.circle(x, y, r, options)
    this.body.label = 'plinko'
    this.r = r
    this.sketch = sketch
    World.add(world, this.body)
  }

  show() {
    // Hàm show các plinko dãy hạt ( chướng ngại vật ).
    this.sketch.noStroke() // show các ô hứng bóng
    this.sketch.fill(255) // màu từng hạt.
    const pos = this.body.position
    this.sketch.push()
    this.sketch.translate(pos.x, pos.y)
    // this.sketch.ellipse(0, 0, this.r) // kích thước từng hạt trong chướng ngại vật.
    this.sketch.ellipse(0, 0, 12, 12) // kích thước từng hạt trong chướng ngại vật.
    this.sketch.pop()
  }
}
