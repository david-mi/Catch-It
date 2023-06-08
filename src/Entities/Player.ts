import type { Game } from "../Game"
import { Obstacle } from "./Obstacle"
import { checkCircleCollision } from "../helpers/checkCircleCollision"

interface PlayerOptions {
  color: string
}

export class Player {
  radius = 5
  diameter = this.radius * 2
  x: number
  y: number
  touchedTarget: Obstacle | null = null

  constructor(public game: Game, public options: PlayerOptions) {
    this.x = this.game.width + this.radius
    this.y = this.game.height + this.radius
  }

  update({ x, y }: { x: number, y: number }) {
    this.x = x
    this.y = y
  }

  handleCollision(targets: Obstacle[]) {
    const previousTouchedTarget = this.touchedTarget
    this.touchedTarget = checkCircleCollision(this, targets)

    if (this.touchedTarget) {
      if (previousTouchedTarget !== null && this.touchedTarget !== previousTouchedTarget) {
        previousTouchedTarget.color = "black"
      }

      this.touchedTarget.color = "red"
    } else if (previousTouchedTarget) {
      previousTouchedTarget.color = "black"
    }

    this.draw()
  }

  draw() {
    this.game.context.beginPath();
    this.game.context.fillStyle = this.options.color
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