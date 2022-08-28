import { v4 as uuid } from 'uuid';
import defaultImage from '../images/HP.png';

const getCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      console.log('hhhh');
      const dataClean = data.map((character) => {
        return {
          img: character.image === '' ? defaultImage : character.image,
          name: character.name,
          id: uuid(),
          species: character.species,
          house: character.house === '' ? 'Desconocida' : character.house,
          gender: character.gender,
          actor: character.actor,
          alive: character.alive,
        };
      });
      return dataClean;
    });
};

export default getCharacters;
