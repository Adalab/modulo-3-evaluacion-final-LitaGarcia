import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
// import { PropTypes } from 'prop-types';

function Filters(props) {
  return (
    <form>
      <FilterByName
        handleInputText={props.handleInputText}
        searchName={props.searchedName}
      />
      <FilterByHouse characterData={props.characterData} />
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
