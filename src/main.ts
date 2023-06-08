import "./style.css"
import { Game } from "./Game"

const game = new Game()
game.animate()

document.addEventListener("pointerlockchange", handlePointerLockChange)

function handlePointerLockChange() {
  if (document.pointerLockElement === game.canvas) {
    game.canvas.addEventListener("mousemove", handleMouseMove)
  } else {
    game.canvas.removeEventListener("mousemove", handleMouseMove)
  }
}

game.canvas.addEventListener("click", async () => {
  await game.canvas.requestPointerLock();
});

function handleMouseMove(event: MouseEvent) {
  const { movementX, movementY } = event
  game.player.update({
    x: movementX,
    y: movementY
  }
  )
  game.player.handleCollision(game.obstacles)
}