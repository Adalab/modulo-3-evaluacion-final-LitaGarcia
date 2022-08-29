import FilterByName from './FilterByName';
import FilterByHouse from './FilterByHouse';
import FilterByGender from './FilterByGender';
import { PropTypes } from 'prop-types';

function Filters(props) {
  const handleSubmit = (ev) => {
    ev.preventDefault();
  };
  return (
    <form onSubmit={handleSubmit}>
      <FilterByName
        handleInputText={props.handleInputText}
        searchedName={props.searchedName}
        character={props.characters}
      />
      <FilterByHouse
        characterData={props.characterData}
        handleInputSelect={props.handleInputSelect}
        selectedHouse={props.selectedHouse}
        allHouses={props.allHouses}
      />
      <FilterByGender
        handleInputRadio={props.handleInputRadio}
        selectedGender={props.selectedGender}
      />
    </form>
  );
}

Filters.propTypes = {
  handleInputText: PropTypes.func.isRequired,
  handleInputSelect: PropTypes.func.isRequired,
  handleInputRadio: PropTypes.func.isRequired,
};

export default Filters;
