import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { API } from "../services/api";

import NotFound from './NotFound';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import AddBuilding from './AddBuilding/AddBuilding';
import Profile from './Profile/Profile';
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from 'react';
import Login from './Login/Login';
import AuthRoute from './AuthRoute/AuthRoute';
import Register from './Register/Register';



function App() {

  console.log("running app");

  // crear variable de estado que va a contenter informacion del usuario. Null porque usuario aun no esta definido

  const [user, setUser] = useState (null);
  const [loginError, setLoginError] = useState ("");
  const navigate = useNavigate ()
  // formData es lo que ya ha rellenado el usuario. En esta variable se almacena informacion sobre usuario en caso de existir. Se ejecuta funcion cuando se rellena el formulario de Login
  const loginUser = (formData) => {
    const existUser = userList.find((userLog)=>{
      return userLog.email === formData.email && userLog.password === formData.password 
    });
// hay que hacer validacion
      if (existUser) {setUser (existUser);
        setLoginError ("");
        navigate("/Profile")
    } else {
      setUser (false);
      setLoginError ("Wrong user or password")
    }  }

  const [buildings, setBuildings] = useState([]);

  const userList = 
    {
      surname: 'Pacheco',
      _id: '6488b3f8915eb09a01e89add',
      properties: ['648495285b17049a6de281f0'],
      name: 'Carla',
      role: "user"

    }

  useEffect(() => {
    API.get("/properties")
    .then(
      (resp) => {
        setBuildings(resp.data);
      },
      (error) => {
        console.log(error);
      }
    );
  }, []);

  console.log("running App");
  console.log("buildings In App-------", buildings);

  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<Home buildings = {buildings} />} />
        <Route path="/Profile" element={<AuthRoute buildings={buildings} user={user} component={Profile} />} />
        <Route path="/Login" element={<Login loginUser = {loginUser} loginError = {loginError}/>} />
        {/* <Route path="/Profile" element={<Profile buildings = {buildings} user = {user}/>} /> */ }
        <Route path="/Register" element={<Register/>} />
        <Route path="/building/:id" element={<Detail buildings = {buildings} user={user}/>} />
        <Route path="/add" element={<AddBuilding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App