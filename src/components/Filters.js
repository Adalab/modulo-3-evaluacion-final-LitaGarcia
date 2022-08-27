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
      <FilterByHouse
        characterData={props.characterData}
        handleInputSelect={props.handleInputSelect}
        allHouses={props.allHouses}
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
