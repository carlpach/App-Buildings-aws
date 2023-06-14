import {useState} from "react"
import "./Register.css"

const Register = () => {
    const [email, setEmail] = useState ("");
    const [pass, setPass] = useState ("");

    const handleSubmitForm = (ev) => {
        ev.preventDefault ();
        console.log (email);
    }
  
    return (
    <div className = "register">
      <form onSubmit={handleSubmitForm}>
               
               <label htmlFor="email">Email</label>
               <input type="text" id="email" name="email" placeholder = "email@upgrade.com" onChange = {(ev) => setEmail (ev.target.value)} value = {email}/>
               <br />

               <label htmlFor="password">Password</label>
               <input type="password" id="password" name="password" onChange = {(ev) => setPass(ev.target.value)} value = {pass}/>
               <br /> 
               
               <input type="submit" value="Sign up" onClick={handleSubmitForm}/>

           </form>
      
    </div>
  )
}

export default Register