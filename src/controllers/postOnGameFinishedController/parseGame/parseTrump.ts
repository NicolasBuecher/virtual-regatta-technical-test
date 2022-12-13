import { Color } from "types";


function parseTrump(trump: string): Color {
  if (!trump || !["S", "H", "D", "C"].includes(trump)) {
    throw new Error("Invalid trump color");
  }

  return trump as Color;
}

export default parseTrump;
