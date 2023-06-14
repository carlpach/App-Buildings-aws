// validar si el usuario existe o no

import { Navigate } from "react-router-dom";

// user es usuario y component es el componente que se quiere renderizar
const AuthRoute = ({user, component}) => {
// si el usuario existe, retorna o carga el componente 
    if (user) return component;
    if (!user) return <Navigate to = "/Login"/>
}
export default AuthRoute;