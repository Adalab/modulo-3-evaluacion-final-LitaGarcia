import FilterByName from './FilterByName';
// import { PropTypes } from 'prop-types';

function Filters(props) {
  return (
    <form>
      <FilterByName
        character={props.characters}
        handleInput={props.handleInput}
      />
    </form>
  );
}
export default Filters;

// component.defaultProps = {
//
// }

// component.propTypes = {
//
// }
