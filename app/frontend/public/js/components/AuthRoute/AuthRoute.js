// validar si el usuario existe o no

import { Navigate } from "react-router-dom";

// user es usuario y component es el componente que se quiere renderizar
var AuthRoute = function AuthRoute(_ref) {
    var user = _ref.user,
        component = _ref.component;

    // si el usuario existe, retorna o carga el componente 
    console.log("Auth route user ---------------", user);

    if (!user.user) {
        console.log("not user", user);
        return React.createElement(Navigate, { to: "/Login" });
    } else if (!user.token) {
        console.log("not token", user);
        return React.createElement(Navigate, { to: "/Login" });
    } else {
        console.log("else", user);
        return component;
    }
};
export default AuthRoute;