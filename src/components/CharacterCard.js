function CharacterCard({ character }) {
  return (
    <ul>
      <li id={character.id}>
        <img
          src={character.img}
          alt={character.name}
          title={character.name}
          className="main__list--image"
        ></img>
        <h2>{character.name}</h2>
        <h3>{character.species}</h3>
      </li>
    </ul>
  );
}
export default CharacterCard;
