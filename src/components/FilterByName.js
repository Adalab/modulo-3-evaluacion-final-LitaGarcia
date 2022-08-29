function FilterByName(props) {
  const handleInputText = (ev) => {
    props.handleInputText(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor="searchName"> Filtrar por nombre </label>
      <input
        type={props.type}
        name="name"
        id="name"
        value={props.searchedName}
        onChange={handleInputText}
      ></input>
    </>
  );
}
export default FilterByName;

FilterByName.defaultProps = {
  type: 'text',
};
