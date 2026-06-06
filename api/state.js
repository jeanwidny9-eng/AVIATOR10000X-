let game = {
  multiplier: 1,
  crashed: false,
  crashPoint: Math.random() * 10 + 2
};

export function updateGame() {
  if (!game.crashed) {
    game.multiplier += 0.05;

    if (game.multiplier >= game.crashPoint) {
      game.crashed = true;
    }
  }

  return game;
}

export function resetGame() {
  game = {
    multiplier: 1,
    crashed: false,
    crashPoint: Math.random() * 10 + 2
  };
}
