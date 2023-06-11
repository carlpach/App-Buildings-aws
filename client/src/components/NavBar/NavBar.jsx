import "./NavBar.css";
import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <div className="b-navbar">
      <Link to="/">HOME</Link>
      <Link to="/">LOGOUT</Link>
    </div>
  )
}

export default NavBar
