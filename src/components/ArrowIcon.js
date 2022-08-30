import '../styles/components/ArrowIcon.scss';
import { Link } from 'react-router-dom';
function ArrowIcon() {
  return (
    <Link to="/">
      <i className="arrow__icon fa-solid fa-house-chimney fa-2x"></i>
    </Link>
  );
}
export default ArrowIcon;
