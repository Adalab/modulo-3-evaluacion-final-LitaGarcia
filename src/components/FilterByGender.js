import translation from '../services/translations.json';
import '../styles/components/FilterByGender.scss';
function FilterByGender(props) {
  const handleInputRadio = (ev) => {
    props.handleInputRadio(ev.target.value);
  };

  return (
    <>
      <p>Género</p>
      <div className="form__wrapper">
        <label htmlFor="gender">Indiferente</label>
        <input
          type={props.type}
          name={props.name}
          value="all"
          id="all"
          checked={props.selectedGender === 'all'}
          onChange={handleInputRadio}
        />
        <label htmlFor="gender">Femenino</label>
        <input
          type={props.type}
          name={props.name}
          value={translation['female']}
          id={translation['female']}
          checked={props.selectedGender === translation['female']}
          onChange={handleInputRadio}
        />
        <label htmlFor="gender">Masculino</label>
        <input
          type={props.type}
          name={props.name}
          value={translation['male']}
          id={translation['male']}
          checked={props.selectedGender === translation['male']}
          onChange={handleInputRadio}
        />
      </div>
    </>
  );
}
FilterByGender.defaultProps = {
  name: 'gender',
  type: 'radio',
};

export default FilterByGender;
