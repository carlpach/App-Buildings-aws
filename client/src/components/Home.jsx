import API from "../services/api";
console.log(API);


const Home = () => {

  console.log("running Home");
  
  const getAllProperties = () => {
    API.get("/properties")
    .then(
      (res) => {
      console.log(res.data);
      },
      (error) => {
        console.log(error);
      }
    )
  }
  getAllProperties();

  return (
    <div>
      this is Home
    </div>
  )
}

export default Home
