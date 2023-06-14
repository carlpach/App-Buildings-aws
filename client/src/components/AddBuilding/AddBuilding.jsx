import "./AddBuilding.css";

import { useState } from "react";
import { useNavigate } from 'react-router-dom';

import  { API }  from "../../services/api";

// initial state of form
const initState = {
    name : "test66",
    constructionYear : "1998",
    image : "",

}

const AddBuilding = () => {

    const [formInputs, setFormInputs] = useState(initState);

    const navigate = useNavigate();

    const handleSubmit = () => {
        console.log("handle click ---------------");
        console.log(formInputs);
        API.post("/properties", formInputs)
        .then(
            (resp) => {
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

    const handleInput = (ev) => {
        const {name, value} = ev.target;
        setFormInputs({...formInputs, [name]: value})
        console.log(formInputs);
    }

    const handleInputImg = (ev) => {
        const value = ev.target.files[0];
        const {name} = ev.target;
        setFormInputs({...formInputs, [name]: value})
        console.log(formInputs);
    }

  return (
    <div>
      <form className="b-form" onSubmit={(ev) => ev.preventDefault()}>
        <label htmlFor="name">Image</label>
        <input type="file" id="image" name="image" onChange={handleInputImg}></input>
        
        <label htmlFor="name">Name of Building</label>
        <input type="text" id="name" name="name" onChange={handleInput} value= {formInputs.name}></input>

        <label htmlFor="name">Construction Year</label>
        <input type="text" name="constructionYear" onChange={handleInput} value= {formInputs.constructionYear}></input>

        <input type="submit" value="Add Building" onClick={handleSubmit}></input>
      </form>
    </div>
  )
}

export default AddBuilding
