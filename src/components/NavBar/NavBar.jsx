import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="b-navbar">
      <div className="b-navbar__item">
          <Link to="/">
            <span className="material-icons">home</span>
          </Link>
          <Link to="/Profile">
            <span className="material-icons">person</span>
          </Link>
      </div>
      <div className="b-navbar__item">
          <Link to="/Login">
            <span className="material-icons">logout</span>
          </Link>
      </div>
    </div>
  )
}

export default NavBar
