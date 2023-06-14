import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="b-navbar">
      <Link to="/">
        <span className="material-icons">home</span>
      </Link>
      <Link to="/Profile">
        <span className="material-icons">person</span>
      </Link>
      <Link to="/Login">
        <span class="material-icons">login</span>
      </Link>
      <Link to="/Register">
        <span class="material-icons">register</span>
      </Link>
      <Link to="/">
        <span className="material-icons">logout</span>
      </Link>

    </div>
  )
}

export default NavBar
