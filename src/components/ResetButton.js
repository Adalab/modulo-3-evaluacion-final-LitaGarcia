import '../styles/components/ResetButton.scss';

function ResetButton(props) {
  const handleClickReset = (ev) => {
    ev.preventDefault();
    props.handleInputText('');
    props.handleInputSelect('Gryffindor');
    props.handleInputRadio('all');
  };
  return (
    <div>
      <p>Pulsa aquí para borrar los filtros:</p>
      <button className="buttonreset" onClick={handleClickReset}>
        <i className="buttonreset--icon fa-solid fa-wand-sparkles fa-xl"></i>
      </button>
    </div>
  );
}
export default ResetButton;
