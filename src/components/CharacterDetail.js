import { Link } from 'react-router-dom';
import ls from '../services/localStorage';
import '../styles/components/CharacterDetail.scss';
import NotFoundCharacter from './NotFoundCharacter';

function CharacterDetail({ character }) {
  return character ? (
    <section key={character.id} id={character.id}>
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

export default CharacterDetail;
