class World {
  constructor(name, date, gamemode, version) {
    // image
    this.name = name;
    this.date = date;
    this.gameMode = gamemode;
    this.version = version;
  }
}

World.GameMode = {
  SURVIVAL: "Survival",
  CREATIVE: "Creative",
  HARDCORE: "Hardcore",
};

World.Difficulty = [
  "Peaceful", "Easy", "Normal", "Hard"
];

World.CycleGameMode = (gameMode) => {
  if (gameMode === World.GameMode.SURVIVAL) {
    return World.GameMode.CREATIVE;
  } else if (gameMode === World.GameMode.CREATIVE) {
    return World.GameMode.HARDCORE;
  } else {
    return World.GameMode.SURVIVAL;
  }
};

World.CycleDifficulty = (index) => {
  return World.Difficulty[++index % World.Difficulty.length];
};

function CreateInitialWorlds() {
  const worldArray = [
    new World("World1", "12 / 12 / 12", "Creative", "1.16.3"),
    new World("World2", "12 / 12 / 12", "Creative", "1.16.3"),
  ];

  return worldArray;
}

export { World, CreateInitialWorlds };
