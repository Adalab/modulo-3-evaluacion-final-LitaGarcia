import ls from '../services/localStorage';

function FilterByName(props) {
  const handleInputText = (ev) => {
    ls.set('searchedName', ev.currentTarget.value);
    console.log(ev.currentTarget.value);
    props.handleInputText(ev.currentTarget.value);
  };
  return (
    <>
      <label htmlFor="searchName"> Filtrar por nombre </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.searchedName}
        onChange={handleInputText}
      ></input>
    </>
  );
}
export default FilterByName;

// component.defaultProps = {
//
// }

// component.propTypes = {
//
// }
