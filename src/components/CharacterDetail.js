import { Link } from 'react-router-dom';

function CharacterDetail({ character }) {
  return (
    <section key={character.id} id={character.id}>
      <Link to="/">Volver</Link>
      <img src={character.img} alt={character.name} title={character.name} />
      <h3>{character.name}</h3>
      <p>{character.alive}</p>
      <p>{character.actor}</p>
      <p> {character.species}</p>
      <p>{character.gender}</p>
      <p>{character.house}</p>
    </section>
  );
}
export default CharacterDetail;
