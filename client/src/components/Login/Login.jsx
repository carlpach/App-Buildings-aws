import "./Login.css";
import { useState } from "react";
import { Link } from "react-router-dom"

// indicamos que el valor inicial de email y password sea vacio en los campos de input del formulario
const initial_state = {
    email: "",
    password: ""
}

const Login = ({loginUser, loginError}) => {
    // recoger informacion del formulario con formData
    const [formData, setFormData] = useState (initial_state)

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
                <h1>Building platform</h1>
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
                        
                <div className="login__register">
                    <div>Not registered yet?</div>
                    <div>
                        <Link to="/Register"><button>Register</button></Link>
                    </div>
                </div>

            </div>

        )
    }

export default Login;