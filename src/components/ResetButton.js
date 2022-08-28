function ResetButton(props) {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleInputText('');
    props.handleInputSelect('Gryffindor');
  };
  return <button onClick={handleClickReset}>Borrar filtros de búsqueda</button>;
}
export default ResetButton;
