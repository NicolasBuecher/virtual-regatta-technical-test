export type Card = string;
export type Color = "S" | "H" | "D" | "C";

export type Game = {
  trump: Color,
  state: Card[],
  players: string[]
}

