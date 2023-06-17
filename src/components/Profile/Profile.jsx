import Gallery from "../Gallery/Gallery";
import "./Profile.css"

const Profile = ( { buildings, user }) => {
  console.log("Profile running ------->");
  const buildingsUser = buildings.filter((buildg) => (
    user.user.properties.includes(buildg._id) 
  ))
  console.log("buildingsUser------", buildingsUser);

  const placeholderImg = "https://www.mountsinai.on.ca/wellbeing/our-team/team-images/person-placeholder/image";

   return (
    <>
      <div className="b-profile">
        <img className="b-profile__img" src={user.user.image ? user.user.image : placeholderImg} alt="user"/>
        <h2>{user.user.userName}</h2>
        <h4>{user.user.email}</h4>
      </div>
        <h2 className="b-profile__title">My buildings</h2>        
      <Gallery buildings = {buildingsUser} flagProfile = {true} />
    </>
  )
}

export default Profile
