import { v4 as uuid } from 'uuid';
import defaultImage from '../images/HP.png';

const getCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character, i) => {
        return {
          img: character.image === '' ? defaultImage : character.image,
          name: character.name,
          id: i.toString(),
          species: character.species,
          house: character.house === '' ? 'Desconocida' : character.house,
          gender: character.gender,
          actor: character.actor,
          alive: character.alive,
        };
      });
      return dataClean;
    });

  // const func = async () =>  {
  // const response1 = await fetch(UL);
  // const data = await response1.json()
  // retrun data.maip()
  // }
};

export default getCharacters;
