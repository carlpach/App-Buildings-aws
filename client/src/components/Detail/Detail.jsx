import { useParams } from 'react-router-dom';
import "./Detail.css";
import { useNavigate } from 'react-router-dom';
import  { APIJson }  from "../../services/api";

const Detail = ({ buildings, user, handleUser }) => {

    const navigate = useNavigate();
    console.log("detail page running -------");
    console.log(user);

    const { id } = useParams()
    console.log(id)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === id
    ))
    console.log(building)

    const handleAddBuildingToUser = (ev) => {
        console.log("handle click add build to user -------");
        console.log(id);
        APIJson.put(`/users/${id}`, {_id: user.user._id})
        .then( (resp) => {
                console.log(resp);
                alert(`Added to user ${user.user.userName}`)
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


    const handleDeleteBuildingToUser = (ev) => {
      console.log("handle click add build to user -------");
      console.log(id);
      APIJson.put(`/users/${id}`, {_id: user.user._id})
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
