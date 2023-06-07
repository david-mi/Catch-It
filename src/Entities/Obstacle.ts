import type { Game } from "../Game"

export class Obstacle {
  radius = Math.random() * 10 + 10
  x: number
  y: number

  constructor(public game: Game) {
    this.x = Math.random() * (game.width - this.radius * 2) + this.radius
    this.y = Math.random() * (game.height - this.radius * 2) + this.radius
  }

  draw() {
    this.game.context.beginPath();
    this.game.context.arc(
      this.x,
      this.y,
      this.radius,
      0,
      2 * Math.PI
    )
    this.game.context.fill()
  }
}