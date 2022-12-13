import type { Game, Result } from "types";
import getTrickPoints from "./getTrickPoints";
import getTrickWinnerPosition from "./getTrickWinnerPosition";
import getTricks from "./getTricks";


function getGameResult(game: Game): Result {
  const { trump, state } = game;

  const tricks = getTricks(state);
  const tricksWinnerPositions = tricks.map(trick => getTrickWinnerPosition(trick, trump));
  let players = game.players.slice(0);
  const playersPointsMap = new Map<string, number>([
    [players[0], 0],
    [players[1], 0],
    [players[2], 0],
    [players[3], 0],
  ]);

  // First player is the one at north
  tricks.forEach((trick, i) => {
    // Get the winner of this trick
    const winnerPosition = tricksWinnerPositions[i];
    const winner = players[winnerPosition];

    // Compute the value of this trick
    const trickPoints = getTrickPoints(trick, trump);

    // Track each player points
    playersPointsMap.set(
      winner,
      playersPointsMap.get(winner) + trickPoints,
    );

    // Reorder players for next trick
    players = players.slice(winnerPosition).concat(players.slice(0, winnerPosition));
  });

  return {
    points: [0, 0],
    players,
  };
}

export default getGameResult;
