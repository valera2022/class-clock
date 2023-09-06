import { useState,useEffect } from "react";
import React from "react";

const UserContext = React.createContext();

function UserProvider({children}){
    const [user,setUser] = useState(null)
    const [loggedin,setLoggedin] = useState(false)

    useEffect(()=>{
        fetch("/me")
        .then(res=> res.json())
        .then(data=>{
            if (!data.error){
                
                setUser(data)
                setLoggedin(true)
            }
           
           
            
        })
    },[])

    const login = (newUser) =>{
        setUser(newUser)
        setLoggedin(true)

    }

    const logout = () =>{

        setLoggedin(false)
        setUser({}) 
      
       
        
    }

    const signup = (user) =>{
        setUser(user)
        setLoggedin(true)
        
    }

    return(
        <UserContext.Provider value={{user,login,logout,signup,loggedin}}>
            {children}
       </UserContext.Provider>
    );

}

export {UserContext,UserProvider};