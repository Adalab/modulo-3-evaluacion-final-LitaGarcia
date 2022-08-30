import '../styles/components/CharacterCard.scss';
function CharacterCard({ character }) {
  return (
    <li id={character.id}>
      <img
        src={character.img}
        alt={character.name}
        title={character.name}
        className="main__list--image"
      ></img>
      <h2 className="main__list--name">{character.name}</h2>
      <h3 className="main__list--specie">{character.species}</h3>
    </li>
  );
}
export default CharacterCard;
