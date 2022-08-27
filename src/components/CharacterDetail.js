import { Link } from 'react-router-dom';

function CharacterDetail(props) {
  return (
    <section key={props.character.id} id={props.character.id}>
      <Link to="/">Volver</Link>
      <img
        src={props.character.img}
        alt={props.character.name}
        title={props.character.name}
      />
      <h3>{props.character.name}</h3>
      <p>{props.character.alive}</p>
      <p>{props.character.actor}</p>
      <p> {props.character.species}</p>
      <p>{props.character.gender}</p>
      <p>{props.character.house}</p>
    </section>
  );
}
export default CharacterDetail;
