import { useParams } from 'react-router-dom';
import "./Detail.css";
import { useNavigate } from 'react-router-dom';
import  { APIJson }  from "../../services/api";
import { Fragment } from "react";

const Detail = ({ buildings, user, handleUser }) => {

    const navigate = useNavigate();
    console.log("detail page running -------");
    console.log(user);

    const { id } = useParams() // Building Id
    console.log("Buldingid-----", id)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === id
    ))

 
    console.log(building)

    const handleAddBuildingToUser = (ev) => {
        console.log("handle click add build to user -------");

        // check if buidling exists in user
        if (user.user.properties.includes(id)) {
          alert(`Building already added to ${user.user.userName}`)
          
        } else {

        console.log(id);
        APIJson.put(`/users/${id}`, {_id: user.user._id})
        .then( (resp) => {
                console.log(resp);
                alert(`Added to user ${user.user.userName}`)
                setTimeout(() => {
                    navigate('/profile');    
                }, 300);
                
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
      console.log("handle click delete building to user -------");
      console.log(id);
      APIJson.put(`/users/deleteProp/${id}`, {_id: user.user._id})
      .then( (resp) => {
              console.log(resp);
              alert(`Deleted for user ${user.user.userName}`)
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

  return (
      <Fragment>
        <div className='b-detail'>
          <img className='b-detail__img' src={building.image} alt='building'/>
          <div className='b-detail__text'>
            <div>
              <h2>{building.name}</h2>
              <h4>{building.constructionYear}</h4>              
            </div>
        
            <div>
              <span onClick={ handleAddBuildingToUser } className="material-icons material-icons--grey">post_add</span>
              <span onClick={ handleDeleteBuildingToUser } className="material-icons material-icons--red">delete</span>
            </div>            
          </div>

              
        </div>      
      </Fragment>

  )
}

export default Detail
