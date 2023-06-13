import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import API from "../services/api";

import NotFound from './NotFound';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import AddBuilding from './AddBuilding/AddBuilding';
import Profile from './Profile/Profile';
import NavBar from "./NavBar/NavBar";
import { useEffect, useState } from 'react';

function App() {

  console.log("running app");

  const [buildings, setBuildings] = useState([]);

  const user = 
    {
      surname: 'Pacheco',
      _id: '64802856826edcc1facaa98a',
      properties: ['648495285b17049a6de281f0'],
      name: 'Carla',

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
        <Route path="/Profile" element={<Profile buildings = {buildings} user = {user}/>} />
        <Route path="/building/:id" element={<Detail buildings = {buildings}/>} />
        <Route path="/add" element={<AddBuilding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
