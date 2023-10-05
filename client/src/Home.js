import React,{useContext} from "react";
import { UserContext } from "./context/user";
import Pitches from "./Pitches";
import { Link } from 'react-router-dom'

function Home (){
    const {user,loggedin} = useContext(UserContext)

  
    if(loggedin){
        console.log(loggedin)
        
        return (
        <div>
            <h1>{user.username} Home</h1>
            <Link to="/pitches">
              <button  type="button" className="btn btn-success" >Pitches</button>
           </Link>
      </div>

        )
       
    }
    else{
        
        return (
            <h3>Login or Signup</h3>
        )

    }
   


}

export default Home
