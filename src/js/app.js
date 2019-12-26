export default class Character {
    constructor(name) {
      this.name = name;
      this.attack = 100;
      this.stoned = false;
    }
  
    get attack() {
      let attack = this._attack - (this.distance - 1) * 10;
  
      if (this.stoned) attack -= Math.log2(this.distance) * 5;
  
      return Math.round(attack);
    }
  
    set attack(value) {
      this._attack = value;
      return this.attack;
    }
  
    get stoned() {
      return this._stoned;
    }
  
    set stoned(value) {
      this._stoned = true;
    }
}

  