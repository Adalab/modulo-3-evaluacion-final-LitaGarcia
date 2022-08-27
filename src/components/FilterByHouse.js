function FilterByHouse(props) {
  const houses = props.characterData
    .filter((character) => character.house !== '')
    .map((character) => character.house);
  const housesSet = new Set(houses);
  const allHouses = [...housesSet];
  const housesList = allHouses.map((house, i) => (
    <option key={i}>{house}</option>
  ));
  return (
    <>
      <label htmlFor="House">Filtrar por casa</label>
      <select
        name="house"
        id="house"
        value={props.selectedHouse}
        onChange={props.handleInputSelect}
      >
        {housesList}
      </select>
    </>
  );
}

export default FilterByHouse;
