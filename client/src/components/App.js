import '../styles/App.css';
import { Routes, Route } from 'react-router-dom';
import NotFound from './NotFound';
import Home from './Home';
import Detail from './Detail';
import API from "../services/api";

function App() {

  console.log("running app");

  return (
    <div className="App">

    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/building/:id" element={<Detail />} />
      <Route path="*" element={<NotFound />} />
    </Routes>
    </div>
  );
}

export default App;
