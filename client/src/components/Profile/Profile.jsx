import Gallery from "../Gallery/Gallery";
import "./Profile.css"

const Profile = ( { buildings, user }) => {
  console.log("Profile running ------->");
  console.log("user data -------", user.user);
    
  const buildingsUser = buildings.filter((buildg) => (
    user.user.properties.includes(buildg._id) 
  ))
  
  console.log("buildingsUser------", buildingsUser);

  const placeholderImg = "https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image";

   return (
    <div className="">
      <div className="b-profile">
        <img src={user.user.image ? user.user.image : placeholderImg} alt="person"/>
        <h2>{user.user.userName}</h2>
        <h4>{user.user.email}</h4>
        <h2>My buildings</h2>        
      </div>
      <Gallery buildings = {buildingsUser} flagAdd = {false} />
    </div>
  )
}

export default Profile
