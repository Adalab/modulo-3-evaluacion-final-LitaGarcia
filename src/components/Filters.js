import FilterByName from './FilterByName';
// import { PropTypes } from 'prop-types';

function Filters(props) {
  return (
    <form>
      <FilterByName
        character={props.characters}
        handleInput={props.handleInput}
        handleSearch={props.handleSearch}
        searchName={props.searchName}
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
