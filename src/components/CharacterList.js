// import './CharacterCard';
// import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function CharacterList(props) {
  const characterList = props.characters
    .sort((a, b) => {
      if (a.name < b.name) {
        return -1;
      }
      if (a.name > b.name) {
        return 1;
      }
      return 0;
    })
    .map((character) => (
      <Link to={`/character/${character.id}`} key={character.id}>
        <li key={character.id} id={character.id}>
          <img
            src={character.img}
            alt={character.name}
            title={character.name}
          ></img>
          <h2>{character.name}</h2>
          <h3>{character.species}</h3>
        </li>
      </Link>
    ));

  return (
    <section>
      <ul>{characterList}</ul>
    </section>
  );
}

// CharacterList.defaultProps (props) = {
//   name: props.characters.name,
//   img: props.characters.img,
//   species: props.characters.img,
// };

export default CharacterList;

// CharacterList.propTypes = {
//   name: propTypes.string.is
// };
