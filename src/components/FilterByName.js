import ls from '../services/localStorage';

function FilterByName(props) {
  const handleInputText = (ev) => {
    ls.set('searchedName', ev.target.value);
    props.handleInputText(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchName"> Filtrar por nombre </label>
      <input
        type="text"
        name="name"
        id="name"
        value={ls.get('searchedName', '')}
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
