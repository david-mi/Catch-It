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

  constructor() {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  animate = () => {
    this.now = Date.now()
    this.delta = Date.now() - this.then

    if (this.delta >= this.interval) {


      this.then = this.now
    }

    requestAnimationFrame(this.animate)
  }
}