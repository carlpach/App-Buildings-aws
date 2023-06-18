import './App.css';
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
  const navigate = useNavigate ()

  // crear variable de estado que va a contenter informacion del usuario.
  const initStateUser = {
    user: {
      email: "",
      password: ""
    },
    token: ""
  }

  const [user, setUser] = useState (initStateUser);
  const [loginError, setLoginError] = useState ("");
  const [buildings, setBuildings] = useState([]);
  const [render, setRender] = useState(0);

  const handleUser = (value) => {
    setUser(value);
  };

  const handleRender = () => {
    setRender(render+1);
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
  }, [render]);

  console.log("user in App ------>", user);
  console.log("buildings in App ------>", buildings);

  return (
    <div>
      { user.user.email ? <NavBar /> : <></> }
      <Routes>
        <Route path="/" element={
                  <AuthRoute 
                  user={user} 
                  component={<Home buildings = {buildings} />} 
                  />}         
        />
        <Route path="/Profile" 
                element={
                  <AuthRoute 
                  user={user} 
                  component={<Profile buildings = {buildings} user = {user} />} 
                  />} 
        />
        <Route path="/Login" element={<Login loginUser = {loginUser} loginError = {loginError}/>} />
        <Route path="/building/:id" element={<Detail buildings = {buildings} user={user} handleUser={handleUser}/>} />
        <Route path="/Register" element={<Register registerUser = {registerUser}/>} />
        <Route path="/add" 
                element={
                  <AuthRoute 
                  user={user} 
                  component={<AddBuilding handleRender= { handleRender } />} 
                  />} 
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
  }

export default App