import { Character } from './character-list.types';

function mapCharacterList(list: Character[]): Character[] {
  return list.map((character) => {
    character.value = character.id.toString();
    character.label = character.name;
    return character;
  });
}

export { mapCharacterList };
