import logoHP from '../images/logoHP.png';
import '../styles/components/Header.scss';
function Header() {
  return (
    <header id="header" className="header">
      <img
        className="header__img"
        src={logoHP}
        title="logo de Harry Potter"
        alt="logo de Harry Potter"
      ></img>
      <h1 className="header__title">Buscador de personajes de Harry Potter</h1>
      <h2 className="header__text">
        Si pulsas sobre un personaje verás{' '}
        <i className=" header__icon fa-regular fa-star"></i>
        mágicamente<i className=" header__icon  fa-regular fa-star"></i> todos
        sus detalles
      </h2>
      <h3 className="header__text">
        ¡También puedes copiar el enlace de arriba para compartir quién es el
        mejor mago!
      </h3>
    </header>
  );
}
export default Header;
