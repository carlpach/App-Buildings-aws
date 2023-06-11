import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import API from "../services/api";

import NotFound from './NotFound';
import Home from './Home/Home';
import Detail from './Detail/Detail';
import AddBuilding from './AddBuilding/AddBuilding';
import { useEffect, useState } from 'react';

function App() {

  console.log("running app");

  const [buildings, setBuildings] = useState([]);


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
  }, [buildings]);

  console.log("running App");
  console.log("buildings In App-------", buildings);

  return (
    <div>

      <Routes>
        <Route path="/" element={<Home buildings = {buildings} />} />
        <Route path="/building/:id" element={<Detail buildings = {buildings}/>} />
        <Route path="/add" element={<AddBuilding />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
