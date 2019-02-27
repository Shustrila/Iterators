import AttackTeam from '../src/js/attackTeam';

const characters = [
  {
    name: 'Лучник', type: 'Bowman', level: 1, health: 100, defence: 50, attackRange: 8, attack: 8,
  },
  {
    name: 'Маг', type: 'Magician', level: 1, health: 100, defence: 50, attackRange: 5, attack: 5,
  },
  {
    name: ' Мечник', type: 'Swordsman', level: 1, health: 100, defence: 60, attackRange: 10, attack: 10,
  },
];

describe('TEST: AttackTeam', () => {
  test('no characters', () => {
    const attackTeam = () => new AttackTeam();

    expect(attackTeam).toThrow('no characters');
  });


  test('iteration of the object', () => {
    const attackTeam = new AttackTeam(characters);
    const arr = [];

    for (const i of attackTeam) {
      arr.push(i);
    }

    expect(arr[0]).toEqual(characters[0]);
  });
});
