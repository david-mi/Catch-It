import { Player } from "./Entities/Player"
import { Obstacle } from "./Entities/Obstacle"

export class Game {
  canvas = document.getElementById("canvas") as HTMLCanvasElement
  context = this.canvas.getContext("2d")!
  width = 800
  height = 800
  then = Date.now()
  now: number | null = null
  delta: number | null = null
  fps = 60
  interval = 1000 / this.fps
  player = new Player(this, { color: "#2ecc71" })
  obstaclesAmount = 200
  obstacles: Obstacle[] = []

  constructor() {
    this.canvas.width = this.width
    this.canvas.height = this.height
    this.createObstacles()
  }

  createObstacles() {
    for (let i = 0; i < this.obstaclesAmount; i++) {
      this.obstacles.push(new Obstacle(this, this.player))
    }

  }

  animate = () => {
    this.now = Date.now()
    this.delta = Date.now() - this.then

    if (this.delta >= this.interval) {
      this.context.clearRect(0, 0, this.width, this.height)
      this.obstacles.forEach((obstacle) => {
        obstacle.draw()
      })
      this.player.draw()
      this.then = this.now
    }

    requestAnimationFrame(this.animate)
  }
}