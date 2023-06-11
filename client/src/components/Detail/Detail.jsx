import { useParams } from 'react-router-dom';
import "./Detail.css";
import NavBar from "../NavBar/NavBar";

const Detail = ({ buildings }) => {

    const { id } = useParams()
    console.log(id)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === id
    ))
    console.log(building)

  return (
      <>
        <NavBar />
        <div className='b-detail'>
          <img className='b-detail__img' src={building.image} alt='building'/>
          <div className='b-detail__text'>
            <h2>{building.name}</h2>
            <h3>{building.constructionYear}</h3>            
          </div>
              
        </div>      
      </>

  )
}

export default Detail
