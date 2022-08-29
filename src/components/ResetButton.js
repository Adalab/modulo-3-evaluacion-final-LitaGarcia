function ResetButton(props) {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleInputText('');
    props.handleInputSelect('Gryffindor');
    props.handleInputRadio('all');
  };
  return <button onClick={handleClickReset}>Borrar filtros de búsqueda</button>;
}
export default ResetButton;
