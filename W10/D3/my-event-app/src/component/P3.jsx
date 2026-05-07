import { useState } from "react";

//Passing arguments to Event Handlers
export function PassingArguments(){
    const [message, setmessage] = useState('No messsage yet');
    //Event handler function 
    const handleClick = (msg) => {
        setmessage(msg);
    };
    return(
        <section>
            <h2>Passing Arguments</h2>
            <button onClick={()=>handleClick("Namaste")}>
                {/* <button onClick={handleClick("Namaste")}></button>//not right approach */}
                Click me
            </button>
            <p>Message:{message}</p>
        </section>
    )
}