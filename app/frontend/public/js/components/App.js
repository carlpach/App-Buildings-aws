var _slicedToArray = function () { function sliceIterator(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"]) _i["return"](); } finally { if (_d) throw _e; } } return _arr; } return function (arr, i) { if (Array.isArray(arr)) { return arr; } else if (Symbol.iterator in Object(arr)) { return sliceIterator(arr, i); } else { throw new TypeError("Invalid attempt to destructure non-iterable instance"); } }; }();

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
  var navigate = useNavigate();

  // crear variable de estado que va a contenter informacion del usuario.
  var initStateUser = {
    user: {
      email: "",
      password: ""
    },
    token: ""
  };

  var _useState = useState(initStateUser),
      _useState2 = _slicedToArray(_useState, 2),
      user = _useState2[0],
      setUser = _useState2[1];

  var _useState3 = useState(""),
      _useState4 = _slicedToArray(_useState3, 2),
      loginError = _useState4[0],
      setLoginError = _useState4[1];

  var _useState5 = useState([]),
      _useState6 = _slicedToArray(_useState5, 2),
      buildings = _useState6[0],
      setBuildings = _useState6[1];

  var _useState7 = useState(0),
      _useState8 = _slicedToArray(_useState7, 2),
      render = _useState8[0],
      setRender = _useState8[1];

  var handleUser = function handleUser(value) {
    setUser(value);
  };

  var handleRender = function handleRender() {
    setRender(render + 1);
  };

  // formData es lo que ya ha rellenado el usuario. En esta variable se almacena informacion sobre usuario en caso de existir. 
  // Se ejecuta funcion cuando se rellena el formulario de Login
  var loginUser = function loginUser(formData) {
    console.log("login user ---------------");
    console.log(formData);
    APIJson.post('/users/login', formData).then(function (resp) {
      console.log(formData);
      console.log(resp);
      setTimeout(function () {
        navigate('/');
      }, 500);
      setUser(resp.data);
      setLoginError("");
      return resp.data;
    }, function (error) {
      setUser(false);
      setLoginError("Wrong user or password");
      console.log(error);
    });
  };

  var registerUser = function registerUser(formData) {
    console.log("register user ------------");
    console.log(formData);
    APIJson.post('/users/register', formData).then(function (resp) {
      console.log(formData);
      console.log(resp);
      setTimeout(function () {
        navigate('/profile');
      }, 500);
      setUser(resp.data);
      console.log("resp.data user --------->", resp.data);
      setLoginError("");
      return resp.data;
    }, function (error) {
      setUser(false);
      setLoginError("Wrong user or password");
      console.log(error);
    });
  };

  useEffect(function () {
    API.get("/properties").then(function (resp) {
      setBuildings(resp.data);
    }, function (error) {
      console.log(error);
    });
  }, [render]);

  console.log("user in App ------>", user);
  console.log("buildings in App ------>", buildings);

  return React.createElement(
    'div',
    null,
    user.user.email ? React.createElement(NavBar, null) : React.createElement(React.Fragment, null),
    React.createElement(
      Routes,
      null,
      React.createElement(Route, { path: '/', element: React.createElement(AuthRoute, {
          user: user,
          component: React.createElement(Home, { buildings: buildings })
        })
      }),
      React.createElement(Route, { path: '/Profile',
        element: React.createElement(AuthRoute, {
          user: user,
          component: React.createElement(Profile, { buildings: buildings, user: user })
        })
      }),
      React.createElement(Route, { path: '/Login', element: React.createElement(Login, { loginUser: loginUser, loginError: loginError }) }),
      React.createElement(Route, { path: '/building/:id', element: React.createElement(Detail, { buildings: buildings, user: user, handleUser: handleUser }) }),
      React.createElement(Route, { path: '/Register', element: React.createElement(Register, { registerUser: registerUser }) }),
      React.createElement(Route, { path: '/add',
        element: React.createElement(AuthRoute, {
          user: user,
          component: React.createElement(AddBuilding, { handleRender: handleRender })
        })
      }),
      React.createElement(Route, { path: '*', element: React.createElement(NotFound, null) })
    )
  );
}

export default App;