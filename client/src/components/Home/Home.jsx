import Gallery from "../Gallery/Gallery";
import NavBar from "../NavBar/NavBar";
import './Home.css';

const Home = ( { buildings } ) => {

  console.log("running Home");
  console.log("buildings In Home-------", buildings);


  return (
    <div className="b-home">
      <NavBar> navbar</NavBar>
      <Gallery buildings = {buildings} />
    </div>
  )
}

export default Home
