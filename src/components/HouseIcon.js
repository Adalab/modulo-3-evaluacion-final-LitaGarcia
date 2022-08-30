import '../styles/components/HouseIcon.scss';

function HouseIcon() {
  const scrollWindow = () => window.scrollTo(0, 0);
  return (
    <i
      className="house__icon fa-solid fa-house-chimney fa-2x "
      onClick={scrollWindow}
    ></i>
  );
}
export default HouseIcon;
