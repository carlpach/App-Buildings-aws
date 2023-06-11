import { useParams } from 'react-router-dom'

const Detail = ({ buildings }) => {

    const { id } = useParams()
    console.log(id)
    console.log(buildings)
    const building = buildings.find((item) => (
      item._id === id
    ))
    console.log(building)

  return (
      <div>
        <div>
          <img className='b-image' src={building.image}/>
        </div>
        <h2>{building.name}</h2>
        <h3>{building.constructionYear}</h3>              
      </div>
  )
}

export default Detail
