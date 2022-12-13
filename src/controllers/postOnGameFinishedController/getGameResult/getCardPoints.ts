import type { Card, Color, Value } from "types";


const VALUE_POINTS_MAP: Record<Value, number> = {
  2: 1,
  3: 2,
  4: 3,
  5: 4,
  6: 5,
  7: 6,
  8: 7,
  9: 8,
  T: 9,
  J: 10,
  D: 11,
  K: 12,
  A: 13,
};

function getCardPoints(card: Card, trump: Color): number {
  const [value, suit] = card.split("");

  return VALUE_POINTS_MAP[value as Value] * (suit === trump ? 2 : 1);
}

export default getCardPoints;
