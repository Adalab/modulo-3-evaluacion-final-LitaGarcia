// import { checkPropTypes } from 'prop-types';

function FilterByName(props) {
  const handleInputText = (ev) => {
    props.handleInputText(ev.target.value);
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
