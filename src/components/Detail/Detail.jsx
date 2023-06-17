import { useParams } from 'react-router-dom';
import "./Detail.css";
import { useNavigate } from 'react-router-dom';
import  { APIJson }  from "../../services/api";

const Detail = ({ buildings, user, handleUser }) => {

    const navigate = useNavigate();
    console.log("detail page running -------");
    console.log(user);

    const { buildingId } = useParams()
    console.log("Buldingid-----", buildingId)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === buildingId
    ))

 
    console.log(building)

    const handleAddBuildingToUser = (ev) => {
        console.log("handle click add build to user -------");

        // check if buidling exists in user
        if (user.user.properties.includes(buildingId)) {
          alert(`Building already added to ${user.user.userName}`)
          
        } else {

        console.log(buildingId);
        APIJson.put(`/users/${buildingId}`, {_id: user.user._id})
        .then( (resp) => {
                console.log(resp);
                alert(`Added to user ${user.user.userName}`)
                setTimeout(() => {
                    navigate('/profile');    
                }, 500);
                
                console.log("response data ------", resp.data);
                handleUser({"user": resp.data, "token": user.token});
                return resp.data
                },
                (error) => {
                    console.log(error);
                }
        )
        }
    }


    const handleDeleteBuildingToUser = (ev) => {
      console.log("handle click add build to user -------");
      console.log(buildingId);
      APIJson.put(`/users/${buildingId}`, {_id: user.user._id})
      .then( (resp) => {
              console.log(resp);
              alert(`Deleted for user ${user.user.userName}`)
              setTimeout(() => {
                  navigate('/profile');    
              }, 500);
              
              console.log("response data ------", resp.data);
              handleUser(resp.data);
              return resp.data
              },
              (error) => {
                  console.log(error);
              }
      )
  }

  return (
      <>
        <div className='b-detail'>
          <img className='b-detail__img' src={building.image} alt='building'/>
          <div className='b-detail__text'>
            <h2>{building.name}</h2>
            <h3>{building.constructionYear}</h3>            
          </div>
          <div>
          <span onClick={ handleAddBuildingToUser } className="material-icons material-icons--grey">post_add</span>
          <span className="material-icons material-icons--red">delete</span>
          </div>
              
        </div>      
      </>

  )
}

export default Detail
