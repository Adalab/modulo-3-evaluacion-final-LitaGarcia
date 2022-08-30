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
      // debugger;
      return character.id === characterId;
    });

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
          <div className={`${selectedHouse} main__details--container`}>
            <h3 className="main__details--name">{character.name}</h3>
            <p>Estado: {character.alive}</p>
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
