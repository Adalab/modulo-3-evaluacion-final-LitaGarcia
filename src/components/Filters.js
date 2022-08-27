import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
// import { PropTypes } from 'prop-types';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleInputText={props.handleInputText}
        searchName={props.searchedName}
      />
      <FilterByHouse
        characterData={props.characterData}
        handleInputSelect={props.handleInputSelect}
        selectedHouse={props.selectedHouse}
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
