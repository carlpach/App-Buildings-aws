import "./NavBar.css";
import { Link } from "react-router-dom";

var NavBar = function NavBar() {
  return React.createElement(
    "div",
    { className: "b-navbar" },
    React.createElement(
      "div",
      { className: "b-navbar__item" },
      React.createElement(
        Link,
        { to: "/" },
        React.createElement(
          "span",
          { className: "material-icons" },
          "home"
        )
      ),
      React.createElement(
        Link,
        { to: "/Profile" },
        React.createElement(
          "span",
          { className: "material-icons" },
          "person"
        )
      )
    ),
    React.createElement(
      "div",
      { className: "b-navbar__item" },
      React.createElement(
        Link,
        { to: "/Login" },
        React.createElement(
          "span",
          { className: "material-icons" },
          "logout"
        )
      )
    )
  );
};

export default NavBar;