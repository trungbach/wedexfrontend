import { World, Bodies } from 'matter-js'
import { P5CanvasInstance } from 'react-p5-wrapper'

interface ParticleProps {
  x: number
  y: number
  r: number
  world: World
  sketch: P5CanvasInstance
}

const options = {
  restitution: 0.5,
  friction: 0,
  density: 1,
}
export default class Particle {
  body: any

  r: number

  sketch: P5CanvasInstance

  constructor({ x, y, r, world, sketch }: ParticleProps) {
    this.body = Bodies.circle(x, y, r, options)
    this.body.label = 'particle'
    this.r = r
    this.sketch = sketch
    World.add(world, this.body)
  }

  isOffScreen() {
    // eslint-disable-next-line prefer-destructuring
    const x = this.body.position.x
    // eslint-disable-next-line prefer-destructuring
    const y = this.body.position.y
    return x < -50 || x > window.screen.width + 50 || y > window.screen.height
  }

  show() {
    this.sketch.fill(255, 255, 255) // màu hạt rơi.
    this.sketch.noStroke() // bỏ viền hạt
    const pos = this.body.position
    this.sketch.push()
    this.sketch.translate(pos.x, pos.y)
    this.sketch.ellipse(0, 0, this.r * 2) // kích thước hạt rơi.
    this.sketch.pop()
  }
}
