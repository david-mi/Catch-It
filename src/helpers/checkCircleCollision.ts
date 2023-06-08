import type { Player } from "../Entities/Player"
import type { Obstacle } from "../Entities/Obstacle"

type Circle = Player | Obstacle

export function checkCircleCollision(circle: Circle, targetCircles: Obstacle[], minGap = 0) {
  for (const targetCircle of targetCircles) {
    const xLength = circle.x - targetCircle.x
    const yLength = circle.y - targetCircle.y
    const hypotenuse = Math.hypot(xLength, yLength)

    const radiusSum = circle.radius + targetCircle.radius + minGap
    if (radiusSum >= hypotenuse) {
      return targetCircle
    }
  }

  return null
}