function parsePlayers(players: string): string[] {
  if (!players) {
    throw new Error("Invalid players");
  }

  return players.split(",");
}

export default parsePlayers;
