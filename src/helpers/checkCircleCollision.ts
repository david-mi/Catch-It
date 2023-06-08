import type { Player } from "../Entities/Player"
import type { Obstacle } from "../Entities/Obstacle"

type Circle = Player | Obstacle

export function checkCircleCollision(circle: Circle, targetCircles: Obstacle[], minGap = 0) {
  for (const targetCircle of targetCircles) {
    const xMax = Math.max(circle.x, targetCircle.x)
    const xMin = Math.min(circle.x, targetCircle.x)
    const xLength = xMax - xMin
    const xLengthSquared = Math.pow(xLength, 2)

    const yMax = Math.max(circle.y, targetCircle.y)
    const yMin = Math.min(circle.y, targetCircle.y)
    const yLength = yMax - yMin
    const yLengthSquared = Math.pow(yLength, 2)

    const squaredSum = xLengthSquared + yLengthSquared
    const hypotenuse = Math.sqrt(squaredSum)

    const radiusSum = circle.radius + targetCircle.radius + minGap
    if (radiusSum >= hypotenuse) {
      return targetCircle
    }
  }

  return null
}