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
  const teams = [
    [players[0], players[2]],
    [players[1], players[3]],
  ];

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

  // Determine winning team
  const teamsPoints = teams
    .map(team => playersPointsMap.get(team[0]) + playersPointsMap.get(team[1]));


  // At this point it's not clean

  const resultPlayers: string[] = [];
  function fillResultPlayers(teamIndex: number) {
    const player1 = teams[teamIndex][0];
    const player2 = teams[teamIndex][1];
    if (playersPointsMap.get(player2) > playersPointsMap.get(player1)) {
      resultPlayers.push(player2, player1);
    } else {
      resultPlayers.push(player1, player2);
    }
  }

  if (teamsPoints[1] > teamsPoints[0]) {
    // West/East team won
    fillResultPlayers(1);
    fillResultPlayers(0);
  } else {
    // North/South team won or Equality
    fillResultPlayers(0);
    fillResultPlayers(1);
  }

  return {
    points: teamsPoints.sort((a, b) => b - a),
    players: resultPlayers,
  };
}

export default getGameResult;
