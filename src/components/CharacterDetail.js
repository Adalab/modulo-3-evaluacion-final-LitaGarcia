import { Link } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';
import NotFoundCharacter from './NotFoundCharacter';
import Loader from './Loader';
import ArrowIcon from './ArrowIcon';

function CharacterDetail({ characterData, characterId, selectedHouse }) {
  if (characterData.length === 0) {
    return <Loader />;
  } else {
    const character = characterData.find((character) => {
      return character.id === characterId;
    });
    const characterStatus = () => {
      if (character.alive.includes('Con vida')) {
        return (
          <>
            {character.alive}
            <i className="fa-solid fa-heart-pulse"></i>
          </>
        );
      } else {
        return (
          <>
            {character.alive}
            <i className="fa-solid fa-skull-crossbones"></i>
          </>
        );
      }
    };

    return character ? (
      <>
        <Link to="/">
          <ArrowIcon />
        </Link>
        <section className="main__details--wrapper">
          <img
            className="main__details--image"
            src={character.img}
            alt={character.name}
            title={character.name}
          />
          <div className={`${character.house} main__details--container`}>
            <h3 className="main__details--name">{character.name}</h3>
            <p>Estado: {characterStatus()}</p>
            <p>Actor: {character.actor}</p>
            <p> Raza: {character.species}</p>
            <p> Género: {character.gender}</p>
            <p> Casa: {character.house}</p>
          </div>
        </section>
      </>
    ) : (
      <NotFoundCharacter />
    );
  }
}

export default CharacterDetail;
