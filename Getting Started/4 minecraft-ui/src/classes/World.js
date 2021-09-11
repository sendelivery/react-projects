class World {
  constructor(name, date, gamemode, version) {
    this.name = name;
    this.date = date;
    this.gamemode = gamemode;
    this.version = version;
  }
}

function CreateInitialWorlds() {
  const worldArray = [
    new World("World1", "12 / 12 / 12", "Creative", "1.16.3"),
    new World("World2", "12 / 12 / 12", "Creative", "1.16.3"),
  ];

  return worldArray;
}

export { World, CreateInitialWorlds };
