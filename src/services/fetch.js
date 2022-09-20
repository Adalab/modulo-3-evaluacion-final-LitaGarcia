import defaultImage from '../images/HP.png';
import translation from './translations.json';
import defaultImageGryffindor from '../images/gryffindor.jpeg';
import defaultImageSlytherin from '../images/slytherin.jpeg';
import defaultImageRavenclaw from '../images/ravenclaw.jpeg';
import defaultImageHufflepuff from '../images/hufflepuff.jpeg';

function getImagesByHouse(characterHouse) {
  switch (characterHouse) {
    case 'Gryffindor':
      return defaultImageGryffindor;
    case 'Slytherin':
      return defaultImageSlytherin;
    case 'Hufflepuff':
      return defaultImageHufflepuff;
    case 'Ravenclaw':
      return defaultImageRavenclaw;
    default:
      return defaultImage;
  }
}
const getCharacters = () => {
  return fetch('https://hp-api.herokuapp.com/api/characters/')
    .then((response) => response.json())
    .then((data) => {
      const dataClean = data.map((character, i) => {
        return {
          img:
            character.image === ''
              ? getImagesByHouse(character.house)
              : character.image,
          name: character.name,
          id: i.toString(),
          species: translation[character.species],
          house: character.house === '' ? 'Desconocida' : character.house,
          gender: translation[character.gender],
          actor: character.actor === '' ? 'Desconocido' : character.actor,
          alive: character.alive ? 'Con vida' : 'Sin vida',
        };
      });
      return dataClean;
    });
};

export default getCharacters;
