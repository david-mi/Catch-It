import { Player } from "./Entities/Circle"

export class Game {
  canvas = document.getElementById("canvas") as HTMLCanvasElement
  context = this.canvas.getContext("2d")!
  width = 500
  height = 500
  then = Date.now()
  now: number | null = null
  delta: number | null = null
  fps = 60
  interval = 1000 / this.fps
  player = new Player(this)

  constructor() {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  animate = () => {
    this.now = Date.now()
    this.delta = Date.now() - this.then

    if (this.delta >= this.interval) {
      this.context.clearRect(0, 0, this.width, this.height)
      this.player.draw()

      this.then = this.now
    }

    requestAnimationFrame(this.animate)
  }
}