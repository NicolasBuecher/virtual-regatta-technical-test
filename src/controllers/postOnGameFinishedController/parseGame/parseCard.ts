import { Card } from "types";


function parseCard(card: string): Card {
  if (!card) {
    throw new Error("Invalid card");
  }

  // TODO: Validate that the string is one of the 52 possible cards

  return card as Card;
}

export default parseCard;
