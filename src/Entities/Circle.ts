import type { Game } from "../Game"

export class Player {
  radius = 5
  x: number
  y: number
  colliding = false

  constructor(public game: Game) {
    this.x = this.game.width + this.radius
    this.y = this.game.height + this.radius
  }

  update({ x, y }: { x: number, y: number }) {
    this.x = x
    this.y = y
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