import React, { useState,useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";

function Signup (){
    const [name, setName] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [passwordConfirmation, setPasswordConfirmation] = useState("")
    const [errorsList,setErrorsList] = useState([])
    const {signup} = useContext(UserContext);

    let navigate = useNavigate()
   
  
  
   
    
  
   
  
    function handleSubmit(e) {
      e.preventDefault()
      let formData = {
        name: name,
        password: password,
        username: username,
        password_confirmation: passwordConfirmation,
       
      }
      
      fetch("/signup",{
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(formData)
      })
      .then(res=> res.json())
      .then(data=> {
           if(!data.errors){
             signup(data)
             navigate("/")
           }
           else {
            setName("")
            setPassword("")
            setUsername("")
            setPasswordConfirmation("")
           
            const errors = data.errors.map(e => <li>{e}</li>) 
            setErrorsList(errors)
           }
      })
  
      
  
  
  
  
    }
  
    return (
      <div>
        <h1>Signup</h1>
        <form onSubmit={handleSubmit}>
          <div>
            <input type="text" name="name" value={name} onChange={e => setName(e.target.value)} placeholder="Name" />
          </div>
          <br></br>
          <div>
            <label for="username">Username</label>
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Confirm Password</label>
            <input type="password" name="passwordconfirmation" value={passwordConfirmation} onChange={e => setPasswordConfirmation(e.target.value)} />
          </div>
          <br></br>
          <button type="submit">Submit</button>
         
  
  
        </form>
        <ul>
            {errorsList}
        </ul>
  
      </div>)

}


export default Signup