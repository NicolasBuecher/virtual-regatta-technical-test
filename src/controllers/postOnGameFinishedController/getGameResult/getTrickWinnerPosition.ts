import type { Color, Trick } from "types";
import getCardPoints from "./getCardPoints";


function getTrickWinnerPosition(trick: Trick, trump: Color): number {
  const points = trick.map(card => getCardPoints(card, trump));
  return points.indexOf(Math.max(...points));
}

export default getTrickWinnerPosition;
