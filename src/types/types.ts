export type Card = string;
export type Color = "S" | "H" | "D" | "C";

export type Game = {
  trump: Color,
  state: Card[],
  players: string[]
}

export type Trick = [Card, Card, Card, Card];
export type Value = "2" | "3" | "4" | "5" | "6" | "7" | "8" | "9" | "T" | "J" | "Q" | "K" | "A";

export type Result = {
  points: number[],
  players: string[]
}
