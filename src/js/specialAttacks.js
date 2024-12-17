export default function getSpecialAttacks(character) {
  if (!character.special || !Array.isArray(character.special)) {
    return [];
  }

  return character.special.map(({
    id, name, icon, description = 'Описание недоступно',
  }) => ({
    id,
    name,
    icon,
    description,
  }));
}
