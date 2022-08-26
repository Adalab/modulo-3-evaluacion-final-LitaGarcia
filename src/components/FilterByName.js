// import { checkPropTypes } from 'prop-types';

function FilterByName(props) {
  const handleInput = (ev) => {
    handleInput(ev.target);
  };
  return (
    <>
      <label> Filtrar por nombre </label>
      <input
        type="text"
        value={props.character.name}
        onChange={handleInput}
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
