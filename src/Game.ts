export class Game {
  canvas = document.getElementById("canvas") as HTMLCanvasElement
  context = this.canvas.getContext("2d")!
  width = 500
  height = 500

  constructor() {
    this.canvas.width = this.width
    this.canvas.height = this.height
  }

  animate = () => {

    requestAnimationFrame(this.animate)
  }
}