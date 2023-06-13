import { useParams } from 'react-router-dom';
import "./Detail.css";
import { useNavigate } from 'react-router-dom';
import  API  from "../../services/api";

const Detail = ({ buildings, user }) => {

    const navigate = useNavigate();

    const { id } = useParams()
    console.log(id)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === id
    ))
    console.log(building)

    const handleAddBuildingToUser = () => {
        console.log("handle click add build to user -------");
        API.put(`/users:${id}`, )
        .then( (resp) => {
                alert("Added!")
                setTimeout(() => {
                    navigate('/');    
                }, 500);

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
          <span onclick={ handleAddBuildingToUser } class="material-icons material-icons--grey">post_add</span>
          <span class="material-icons material-icons--red">delete</span>
          </div>
              
        </div>      
      </>

  )
}

export default Detail
