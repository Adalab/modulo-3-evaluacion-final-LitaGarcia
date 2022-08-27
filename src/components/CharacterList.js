// import './CharacterCard';
// import PropTypes from 'prop-types';

function CharacterList(props) {
  const characterList = props.characterData

    // .filter((house)=>)
    .map((character) => (
      <li key={character.id}>
        <img
          src={character.img}
          alt={character.name}
          title={character.name}
        ></img>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </li>
    ));

  return (
    <section>
      <ul>{characterList}</ul>
    </section>
  );
}

// CharacterList.defaultProps (props) = {
//   name: props.characterData.name,
//   img: props.characterData.img,
//   species: props.characterData.img,
// };

export default CharacterList;

// CharacterList.propTypes = {
//   name: propTypes.string.is
// };
