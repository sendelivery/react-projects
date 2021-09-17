class World {
  constructor(name, date, gamemode, difficulty, version, selected=false) {
    this.objectID =
      name.replace(/\s/g, "_") + "_" + Math.floor(Math.random() * Date.now());
    // image
    this.name = name;
    this.date = date;
    this.gameMode = gamemode;
    this.difficulty = difficulty;
    this.version = version;
    this.selected = selected;
  }
}

World.GameMode = {
  SURVIVAL: "Survival",
  CREATIVE: "Creative",
  HARDCORE: "Hardcore",
};

World.Difficulty = ["Peaceful", "Easy", "Normal", "Hard"];

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
    new World("MineCORE", "(29/09/2020, 17:28)", "Hardcore", World.Difficulty[3], "1.16.3"),
    new World("Eorzea", "(25/09/2020, 15:10)", "Survival", World.Difficulty[2], "1.16.3"),
  ];

  return worldArray;
}

export { World, CreateInitialWorlds };
