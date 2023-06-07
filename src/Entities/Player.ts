import type { Game } from "../Game"
import { Obstacle } from "./Obstacle"
import { checkCircleCollision } from "../helpers/checkCircleCollision"

export class Player {
  radius = 5
  x: number
  y: number
  collisionTarget: Obstacle | null = null

  constructor(public game: Game) {
    this.x = this.game.width + this.radius
    this.y = this.game.height + this.radius
  }

  update({ x, y }: { x: number, y: number }) {
    this.x = x
    this.y = y
  }

  handleCollision(targets: Obstacle[]) {
    this.collisionTarget = checkCircleCollision(this, targets)
    this.draw()
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