import type { Game } from "../Game"
import { checkCircleCollision } from "../helpers/checkCircleCollision"
import { Player } from "./Player"

export class Obstacle {
  radius = Math.random() * 10 + 10
  x: number
  y: number
  private _color = "black"

  constructor(public game: Game, public player: Player) {
    let isCircleColliding: null | Obstacle
    const minObstaclesGap = player.diameter + 2

    do {
      this.x = Math.random() * (game.width - this.radius * 2) + this.radius
      this.y = Math.random() * (game.height - this.radius * 2) + this.radius
      isCircleColliding = checkCircleCollision(this, [...game.obstacles, player] as Obstacle[], minObstaclesGap)
    } while (isCircleColliding)
  }

  get color() {
    return this._color
  }

  set color(color) {
    this.game.context.save()
    this._color = color
    this.game.context.restore()
  }

  draw() {
    this.game.context.beginPath();
    this.game.context.fillStyle = this.color
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