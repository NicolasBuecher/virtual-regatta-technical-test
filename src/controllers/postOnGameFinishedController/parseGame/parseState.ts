import { Card } from "types";
import parseCard from "./parseCard";


function parseState(state: string): Card[] {
  if (!state) {
    throw new Error("Invalid state");
  }

  return state.split("-").map(parseCard);
}

export default parseState;
