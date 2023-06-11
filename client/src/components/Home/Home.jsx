import Gallery from "../Gallery/Gallery";

const Home = ( { buildings } ) => {

  console.log("running Home");
  console.log("buildings In Home-------", buildings);


  return (
    <div>
      <Gallery buildings = {buildings} />
    </div>
  )
}

export default Home
