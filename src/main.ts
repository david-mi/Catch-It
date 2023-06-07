import "./style.css"
import { Game } from "./Game"

const game = new Game()
game.animate()

game.canvas.addEventListener("mousemove", handleMouseMove)
function handleMouseMove({ offsetX, offsetY }: MouseEvent) {
  game.player.update({ x: offsetX, y: offsetY })
  game.player.handleCollision(game.obstacles)
}