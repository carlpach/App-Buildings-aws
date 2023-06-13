import "./NavBar.css";
import { Link } from "react-router-dom"
import MaterialIcon, {colorPalette} from 'material-icons-react';

const NavBar = () => {
  return (
    <div className="b-navbar">
      <Link to="/">
        <span class="material-icons">home</span>
      </Link>
      <Link to="/Profile">
        <span class="material-icons">person</span>
      </Link>
      <Link to="/">
        <span class="material-icons">logout</span>
      </Link>

    </div>
  )
}

export default NavBar
