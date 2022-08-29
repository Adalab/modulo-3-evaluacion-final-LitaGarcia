import CharacterCard from './CharacterCard';
import PropTypes from 'prop-types';
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
        <CharacterCard character={character} key={character.id} />
      </Link>
    ));

  return (
    <section>
      <ul className="main__list">{characterList}</ul>
    </section>
  );
}

CharacterCard.propTypes = {
  character: PropTypes.object.isRequired,
};

export default CharacterList;
