// import './CharacterCard';
import defaultProps from 'prop-types';
import { Link } from 'react-router-dom';
import '../styles/components/CharacterList.scss';

function CharacterList({ characters }) {
  const characterList = characters
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
            className="main__list--image"
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

// CharacterList.defaultProps= {
//   title: props.characters.name,
//   // img: props.characters.img,
//   // species: props.characters.img,
// };

export default CharacterList;

// CharacterList.propTypes = {
//   name: propTypes.string.is
// };
