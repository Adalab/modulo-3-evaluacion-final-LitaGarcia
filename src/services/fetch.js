import { v4 as uuid } from 'uuid';

// const getCharacters = () => {
//   return fetch('http://hp-api.herokuapp.com/api/characters')
//     .then((response) => response.json())
//     .then((data) => {
//       const characters = data.map((character) => {
//         return {
//           name: character.name,
//           //Add more characteristics to give to details or make a new fetch
//         };
//       });
//       return characters;
//     });
// };

const getCharactersByHouseName = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/house/gryffindor')
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
        };
      });
      return dataClean;
    });
};

export default getCharactersByHouseName;
