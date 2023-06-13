import Gallery from "../Gallery/Gallery";
import './Home.css';

const Home = ( { buildings } ) => {

  console.log("running Home");
  console.log("buildings In Home-------", buildings);


  return (
    <div className="b-home">
      <Gallery buildings = {buildings} />
    </div>
  )
}

export default Home
