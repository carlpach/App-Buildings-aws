import '../styles/App.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import { API } from "../services/api";
import { APIJson } from "../services/api";

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

  const [buildings, setBuildings] = useState([]);

  const handleUser = (value) => {
    setUser(value);
  };

  // formData es lo que ya ha rellenado el usuario. En esta variable se almacena informacion sobre usuario en caso de existir. 
  // Se ejecuta funcion cuando se rellena el formulario de Login
  const loginUser = (formData) => {
    console.log("login user ---------------");
    console.log(formData);
    APIJson.post(`/users/login`, formData)
    .then( (resp) => {
              console.log(formData);
              console.log(resp);
              setTimeout(() => {
                  navigate('/');    
              }, 500);
              setUser(resp.data);
              setLoginError ("");
              return resp.data
            },

            (error) => {
                setUser (false)
                setLoginError ("Wrong user or password")
                console.log(error);
                  }
      )
    }
  
  const registerUser = (formData) => {
    console.log("register user ------------");
    console.log(formData);
    APIJson.post(`/users/register`, formData)
    .then( (resp) => {
              console.log(formData);
              console.log(resp);
              setTimeout(() => {
                  navigate('/profile');    
              }, 500);
              setUser(resp.data);
              console.log("resp.data user --------->", resp.data);
              setLoginError ("");
              return resp.data
            },

            (error) => {
                setUser (false)
                setLoginError ("Wrong user or password")
                console.log(error);
                  }
      )
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


  return (
    <div>
      <NavBar />

      <Routes>
        <Route path="/" element={<AuthRoute 
                  user={user} 
                  component={<Home buildings = {buildings} />} 
                  />}         
        />
        <Route path="/Profile" 
                element={<AuthRoute 
                  user={user} 
                  component={<Profile buildings = {buildings} user = {user} />} 
                  />} 
                  
        />
        <Route path="/Login" element={<Login loginUser = {loginUser} loginError = {loginError}/>} />
        {/* <Route path="/Profile" element={<Profile buildings = {buildings} user = {user}/>} /> */ }
        <Route path="/building/:id" element={<Detail buildings = {buildings} user={user} handleUser={handleUser}/>} />
        <Route path="/Register" element={<Register registerUser = {registerUser}/>} />
        <Route path="/add" element={<AddBuilding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
  }

export default App