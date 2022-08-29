import '../styles/components/ResetButton.scss';

function ResetButton(props) {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleInputText('');
    props.handleInputSelect('Gryffindor');
    props.handleInputRadio('all');
  };
  return (
    <button className="buttonreset" onClick={handleClickReset}>
      <span>
        <i>Borrar filtros de búsqueda</i>
      </span>
      <i className="buttonreset--icon fa-solid fa-wand-sparkles fa-lg"></i>
    </button>
  );
}
export default ResetButton;
