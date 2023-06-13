import Gallery from "../Gallery/Gallery";
import "./Profile.css"

const Profile = ( { buildings, user }) => {
    
  const buildingsUser = buildings.filter((buildg) => (
    user.properties.includes(buildg._id) 
  ))
  
  console.log("buildingsUser------", buildingsUser);
  
   return (
    <div className="b-profile">
      <img src={user.image} alt="person"/>
      <h2>{user.name} {user.surname}</h2>
      <h3>My buildings</h3>
      <Gallery buildings = {buildingsUser} />
    </div>
  )
}

export default Profile
