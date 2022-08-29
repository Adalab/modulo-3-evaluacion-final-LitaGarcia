function FilterByGender(props) {
  const handleInputRadio = (ev) => {
    props.handleInputRadio(ev.target.value);
  };

  return (
    <>
      <p>Selecciona por género</p>
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
        value="female"
        id="female"
        checked={props.selectedGender === 'female'}
        onChange={handleInputRadio}
      />
      <label htmlFor="gender">Masculino</label>
      <input
        type={props.type}
        name={props.name}
        value="male"
        id="male"
        checked={props.selectedGender === 'male'}
        onChange={handleInputRadio}
      />
    </>
  );
}
FilterByGender.defaultProps = {
  name: 'gender',
  type: 'radio',
};

export default FilterByGender;
