// import { checkPropTypes } from 'prop-types';

function FilterByName(props) {
  const handleSearch = (ev) => {
    props.handleSearch(ev.target.value);
  };
  return (
    <>
      <label htmlFor="searchName"> Filtrar por nombre </label>
      <input
        type="text"
        name="name"
        id="name"
        value={props.searchName}
        onChange={handleSearch}
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
