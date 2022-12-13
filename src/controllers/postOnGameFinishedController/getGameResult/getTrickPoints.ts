import { Color, Trick } from "types";
import getCardPoints from "./getCardPoints";


function getTrickPoints(trick: Trick, trump: Color): number {
  return trick.reduce((points, card) => points + getCardPoints(card, trump), 0);
}

export default getTrickPoints;
