export const LOAD_CHARACTERS = 'LOAD_CHARACTERS';

export function loadCharacters(characters, page, total, limit) {
  return { type: LOAD_CHARACTERS, characters, page, total, limit };
}
