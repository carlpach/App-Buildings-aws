import {useState} from "react"
import "./Register.css"

// indicamos que el valor inicial de email y password sea vacio en los campos de input del formulario
const initial_state = {
  email: "",
  password: ""
}

const Register = ({ registerUser }) => {
    const [formData, setFormData] = useState (initial_state)

    const handleSubmitForm = (ev) => {
        ev.preventDefault ();
        registerUser(formData);
    }

    const handleInput = (ev) => {
      const {name, value} = ev.target
      setFormData ({...formData, [name]: value})
  }



    return (
      <div className = "register">
        <form onSubmit={handleSubmitForm}>
                
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder = "email@upgrade.com" onChange = {handleInput} value = {formData.email}/>
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange = {handleInput} value = {formData.password}/>
                <br /> 
                
                <input type="submit" value="Sign up" onClick={handleSubmitForm}/>

            </form>
        
      </div>
  )
}

export default Register