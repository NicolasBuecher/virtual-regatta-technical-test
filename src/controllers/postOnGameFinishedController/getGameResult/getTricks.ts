import type { Card, Trick } from "types";


const CARDS_BY_TRICK = 4;

function getTricks(cards: Card[]): Trick[] {
  const tricks: Trick[] = [];
  const { length } = cards;

  for (let i = 0; i < length; i += CARDS_BY_TRICK) {
    const trick: Trick = [
      cards[i],
      cards[i + 1],
      cards[i + 2],
      cards[i + 3],
    ];

    if (!trick.includes(undefined)) {
      tricks.push(trick);
    }
  }

  return tricks;
}

export default getTricks;
