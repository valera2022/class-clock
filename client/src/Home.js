import React,{useContext} from "react";
import { UserContext } from "./context/user";
import Pitches from "./Pitches";
import { Link } from 'react-router-dom'

function Home (){
    const {user,loggedin} = useContext(UserContext)

  
    if(loggedin){
        console.log(loggedin)
        
        return (
        <div className="home">
            <p>{user.username}'s Home</p>
            <p>Welcome! In this Website you can add MlB pitches and let  other peole know about it. The other users can leave a note about the pitch you created.
                feel free to explore, click on the button pitches belows
            </p>
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
