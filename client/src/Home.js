import React,{useContext} from "react";
import { UserContext } from "./context/user";

function Home (){
    const {user,loggedin} = useContext(UserContext)
    if(loggedin){
        console.log(loggedin)
        
        return (
            <h1>{user.username} Home</h1>
        )
       
    }
    else{
        
        return (
            <h3>Login or Signup</h3>
        )

    }
   


}

export default Home