import React, { useState,useContext } from "react";
import { UserContext } from "./context/user";
import { useNavigate } from "react-router-dom";

function Login (){
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const [error,setError] = useState("")
    const {login,loggedin} = useContext(UserContext);
    const navigate = useNavigate()

    function handleSubmit(e) {
        e.preventDefault()
        let formData = {
        
          password: password,
          username: username
       
          
        }
        
        fetch("/login",{
          method: "POST",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(formData)
        })
        .then(res=> res.json())
        .then(data=> {
             if(!data.error){
               login(data)
               navigate("/")
             }
             else {
              
              setPassword("")
              setUsername("")
             
            
              setError(data.error)
             }
        })
    
        
    
    
    
    
      }
    



    if(!loggedin){

    }
    return (


        <div>
        <h1>login</h1>
        <form onSubmit={handleSubmit}>
             <div>
            <label for="username">Username</label>
            <input type="text" name="username" value={username} onChange={e => setUsername(e.target.value)} />
          </div>
          <br></br>
          <div>
            <label>Password</label>
            <input type="password" name="password" value={password} onChange={e => setPassword(e.target.value)} />
          </div>
          <button type="submit">Submit</button>
         
  
  
         </form>
         <ul>
             {error}
         </ul>
         </div>
   
    )
     
    
}


export default Login