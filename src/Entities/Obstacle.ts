import type { Game } from "../Game"
import { checkCircleCollision } from "../helpers/checkCircleCollision"

export class Obstacle {
  radius = Math.random() * 10 + 10
  x: number
  y: number

  constructor(public game: Game) {
    let isCircleColliding: null | Obstacle

    do {
      this.x = Math.random() * (game.width - this.radius * 2) + this.radius
      this.y = Math.random() * (game.height - this.radius * 2) + this.radius
      isCircleColliding = checkCircleCollision(this, game.obstacles)
    } while (isCircleColliding)
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