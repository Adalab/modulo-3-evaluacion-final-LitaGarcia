import '../styles/components/FilterByName.scss';
function FilterByName(props) {
  const handleInputText = (ev) => {
    props.handleInputText(ev.currentTarget.value);
  };
  return (
    <>
      <label className="form__label" htmlFor="searchName">
        Nombre:
      </label>
      <input
        className="form__input"
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
