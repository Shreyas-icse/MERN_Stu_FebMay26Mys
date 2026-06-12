import { useState } from "react";
export default function AuthStatus(){
    const[isLoggedIn,setIsLoggedIn] = useState(false);
    return(
        <section>
            <h2>Authentication status</h2>
            <p>
                Current Status:{
                    isLoggedIn ? "Logged In" :"Guest User"
                }
            </p>
            <button onClick={()=>{
                setIsLoggedIn(!isLoggedIn);
            }}> 
                {isLoggedIn ? "LOgOut" :"Login"}
            </button>
        </section>
    )
}