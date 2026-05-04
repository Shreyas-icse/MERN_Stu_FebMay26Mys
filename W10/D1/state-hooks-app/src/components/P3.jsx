//Event handiling with state
import {useState} from "react";

//In react:
//Events use camelCase naming, eg: onClick, onChange
export function EventHandilingState(){
    const [name, setName] = useState('');

    const handleChange = (e) =>{
        setName(e.target.value);
    };

    const handleClick = ()=>{
        alert(`Hello, ${name||Guest}`);
    };
    return(
        <>
            <h2>Event Handling with state</h2>
            <input type = "text" value={name} onChange={handleChange} placeholder="Enter your name"/>

            <button onClick={handleClick}>Greet user</button>
            <p>Current input: {name}</p>
        </>
    )
}