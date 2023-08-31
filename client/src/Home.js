import React,{useContext} from "react";
import { UserContext } from "./context/user";

function Home (){
    const {user} = useContext(UserContext)
    if(!user){
        return (
            <h3>Login or Signup</h3>
        )
    }
    else{
        return (
            <h1>{user.name} Home</h1>
        )

    }
   


}

export default Home