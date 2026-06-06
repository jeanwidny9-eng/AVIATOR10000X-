import { updateGame } from "./state";

export default function handler(req, res) {
  const game = updateGame();

  res.json({
    multiplier: game.multiplier.toFixed(2),
    crashed: game.crashed
  });
}
