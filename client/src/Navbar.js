import React, { useContext } from "react";
import { UserContext } from "./context/user";
import { NavLink } from "react-router-dom";
import { useNavigate } from "react-router-dom";
function NavBar() {
  const {user,logout,loggedin} = useContext(UserContext)

  const navigate = useNavigate()

  function logMeOut(){
     fetch("/logout",{ method: "DELETE",
     headers: {"Content-Type": "application/json"}
     })
     .then( ()=>{
          logout()
          // navigate("/")
     })
  }

  if (loggedin){
    return (
      // <div>
      //   <h1>Hello {user.username}</h1>
      //   <br/>
      //   <button onClick={logMeOut}>Logout</button> 
      // </div>
      <div style={{backgroundColor:"#00cc99"}}>
      <NavLink
            to="/"
            end
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                margin: "0 10px 10px",
                width: "60px",
                padding: "10px",
                
                color: isActive ? "red" : "black",
                textDecoration: isActive ? "underline" : "none"
              };
            }}
            
          className="NavLink" onClick={logMeOut}>
           LogOut
          </NavLink>
          </div>
    )

  }
  else{
    return (
        <div style={{backgroundColor:"#00cc99"}}>
        
         
          <NavLink
            to="/login"
            end
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                margin: "0 10px 10px",
                width: "60px",
                padding: "10px",
                
                color: isActive ? "red" : "black",
                textDecoration: isActive ? "underline" : "none"
              };
            }}
            
          className="NavLink">
           Login
          </NavLink>
  
  
          <NavLink
            to="/signup"
            end
            style={({ isActive, isPending }) => {
              return {
                fontWeight: isActive ? "bold" : "",
                color: isActive ? "red" : "black",
                textDecoration: isActive ? "underline" : "none"
              };
            }}
           
          >
            Signup
          </NavLink>
        </div>
      );
    
    
    

  }

  
  }

  export default NavBar