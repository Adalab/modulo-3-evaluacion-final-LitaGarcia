import { Link } from 'react-router-dom';
import '../styles/components/CharacterDetail.scss';
import NotFoundCharacter from './NotFoundCharacter';
import Loader from './Loader';

function CharacterDetail({ characterData, characterId, selectedHouse }) {
  if (characterData.length === 0) {
    return <Loader />;
  } else {
    const character = characterData.find((character) => {
      // debugger;
      return character.id === characterId;
    });

    return character ? (
      <section
        className={`${selectedHouse} main__deails--wrapper`}
        key={character.id}
        id={character.id}
      >
        <Link to="/">Volver</Link>
        <img
          className="main__details--image"
          src={character.img}
          alt={character.name}
          title={character.name}
        />
        <h3>{character.name}</h3>
        <p>{character.alive}</p>
        <p>{character.actor}</p>
        <p> {character.species}</p>
        <p>{character.gender}</p>
        <p>{character.house}</p>
      </section>
    ) : (
      <NotFoundCharacter />
    );
  }
}

export default CharacterDetail;
