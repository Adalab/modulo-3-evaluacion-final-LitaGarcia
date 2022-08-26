// import './CharacterCard';
// import PropTypes from 'prop-types';

function CharacterList(props) {
  const characterList = props.characters
    // .filter((character) =>
    //   character.house.toLowerCase().includes(character.house.toLowerCase())
    // )
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
//   name: props.characters.name,
//   img: props.characters.img,
//   species: props.characters.img,
// };

export default CharacterList;

// CharacterList.propTypes = {
//   name: propTypes.string.is
// };
