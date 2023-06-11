import React from 'react'
import './Gallery.css';
import { Link } from "react-router-dom"

const Gallery = ({ buildings }) => {
    console.log("this is gallery");
    console.log(buildings);



  return (
    <div className='b-gallery'>
        {
          buildings.map((item, i) => (
            <li className='b-card' key={i}>
              <Link to={`/building/${item._id}`}>
                  <img className='b-image' src={item.image} alt='building'/>
                  <h2>{item.name}</h2>
                  <h3>{item.constructionYear}</h3>              
              </Link>
            </li>
        ))
        }
    </div>
  )
}

export default Gallery
