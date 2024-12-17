import getSpecialAttacks from '../js/specialAttacks';

describe('getSpecialAttacks', () => {
  test('should return an array of special attacks with default description', () => {
    const character = {
      special: [
        {
          id: 1,
          name: 'Attack 1',
          icon: 'http://...',
        },
        {
          id: 2,
          name: 'Attack 2',
          icon: 'http://...',
          description: 'Attack 2 description',
        },
      ],
    };

    const correct = [
      {
        id: 1,
        name: 'Attack 1',
        icon: 'http://...',
        description: 'Описание недоступно',
      },
      {
        id: 2,
        name: 'Attack 2',
        icon: 'http://...',
        description: 'Attack 2 description',
      },
    ];

    expect(getSpecialAttacks(character)).toEqual(correct);
  });

  test('should handle empty special array', () => {
    const character = {
      special: [],
    };
    const correct = [];

    expect(getSpecialAttacks(character)).toEqual(correct);
  });

  test('should handle character without special property', () => {
    const character = {};
    const correct = [];

    expect(getSpecialAttacks(character)).toEqual(correct);
  });
});
