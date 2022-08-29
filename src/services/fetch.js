// import { v4 as uuid } from 'uuid';
import defaultImage from '../images/HP.png';
import translation from '../components/translations.json';

const getCharacters = () => {
  return fetch('http://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character, i) => {
        return {
          img: character.image === '' ? defaultImage : character.image,
          name: character.name,
          id: i.toString(),
          species: translation[character.species],
          house: character.house === '' ? 'Desconocida' : character.house,
          gender: translation[character.gender],
          actor: character.actor,
          alive: character.alive ? 'Con vida' : 'Sin vida',
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
