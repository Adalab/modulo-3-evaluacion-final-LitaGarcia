function FilterByGender(props) {
  const handleInputRadio = (ev) => {
    props.handleInputRadio(ev.target.value);
  };
  return (
    <>
      <p>Selecciona por género</p>
      <label htmlFor="gender">Indiferente</label>
      <input
        type="radio"
        name="gender"
        value="all"
        id="all"
        checked={props.selectedGender === 'all'}
        onChange={handleInputRadio}
      />
      <label htmlFor="gender">Femenino</label>
      <input
        type="radio"
        name="gender"
        value="female"
        id="female"
        checked={props.selectedGender === 'female'}
        onChange={handleInputRadio}
      />
      <label htmlFor="gender">Masculino</label>
      <input
        type="radio"
        name="gender"
        value="male"
        id="male"
        checked={props.selectedGender === 'male'}
        onChange={handleInputRadio}
      />
    </>
  );
}
export default FilterByGender;
