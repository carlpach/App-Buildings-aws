import "./Login.css";
import { useState } from "react";

// indicamos que el valor inicial de email y password sea vacio en los campos de input del formulario
const initial_state = {
    email: "",
    password: ""
}

const Login = ({loginUser, loginError}) => {
    const [formData, setFormData] = useState (initial_state)
    // recoger informacion del formulario con formData
const handleSubmitForm = (ev) => {
        loginUser (formData)
    }
const handleInput = (ev) => {
    const {name, value} = ev.target
    setFormData ({...formData, [name]: value})

}
const handleCancel = () => {
    setFormData (initial_state)
}
    return (
        <div className = "login">
            <form onSubmit={(ev) => ev.preventDefault()}>
               
                <label htmlFor="email">Email</label>
                <input type="text" id="email" name="email" placeholder = "email@upgrade.com" onChange = {handleInput} value = {formData.email }/>
                <br />

                <label htmlFor="password">Password</label>
                <input type="password" id="password" name="password" onChange = {handleInput} value = {formData.password}/>
                <br /> 
                
                <input type="submit" value="Sign in" onClick={handleSubmitForm}/>

                <input type="submit" value = "Cancel" onClick={handleCancel}/>
            </form>
            {loginError ? <p>{loginError}</p> : null }
        </div>
    )
}

export default Login;