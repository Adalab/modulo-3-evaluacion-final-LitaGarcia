function FilterByStudent(props) {
  console.log(props.isHogwartsStudent);
  const handleInputCheckbox = (ev) => {
    props.handleInputCheckbox(ev.target.checked);
  };
  return (
    <>
      <label htmlFor="isHogwartsStudent"> Filtrar por estudiante </label>
      <input
        id="FilterByStudent"
        type="checkbox"
        value="FilterByStudent"
        checked={props.isHogwartsStudent}
        onChange={handleInputCheckbox}
      ></input>
    </>
  );
}

export default FilterByStudent;
