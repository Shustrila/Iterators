export default class AttackTeam {
  constructor(arr) {
    if (arr === undefined) throw new TypeError('no characters');
    this._characters = arr.sort((a, b) => (a.attack + a.attackRange - b.attack - b.attackRange));
  }

  [Symbol.iterator]() {
    let counter = 0;

    return {
      next: () => ({
        value: this._characters[counter++],
        done: !(counter < this._characters.length),
      }),
    };
  }
}
