class Character {
    constructor(name, profession) {
      this.name = name;
      this.profession = profession;
      this.gold = 1000;
    }
    //getters and setters
    getCharacterName(){return this.name}
    setCharacterName(newName){this.name = newName}
    getCharacterProfession(){return this.profession}
    setCharacterProfession(newProf){this.profession = newProf}
    getCharacterGold(){return this.gold}
    setCharacterGold(newAmount){return this.gold = newAmount}
  }