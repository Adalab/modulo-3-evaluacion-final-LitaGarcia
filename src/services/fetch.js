import { v4 as uuid } from 'uuid';

const getCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character) => {
        return {
          img:
            character.image === ''
              ? 'https://via.placeholder.com/150'
              : character.image,
          name: character.name,
          id: uuid(),
          species: character.species,
          house: character.house,
          gender: character.gender,
          actor: character.actor,
          alive: character.alive,
        };
      });
      return dataClean;
    });
};

export default getCharacters;
