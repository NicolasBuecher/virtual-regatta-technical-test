import type { Game } from "types";
import parsePlayers from "./parsePlayers";
import parseState from "./parseState";
import parseTrump from "./parseTrump";


function parseGame(game: string): Game {
  const parts = game.split("#");

  if (parts.length !== 3) {
    throw new Error("Invalid game string format");
  }

  try {
    const trump = parseTrump(parts[0]);
    const state = parseState(parts[1]);
    const players = parsePlayers(parts[2]);

    return {
      trump,
      state,
      players,
    };
  } catch (error) {
    throw new Error(`Invalid game string format: ${error.message}`);
  }
}

export default parseGame;
