import { useState } from "react";
export default function CitySelector(){
    const [city,setCity] = useState("Mysore");
    return(
        <section>
            <h2>Selected city</h2>
            <p>{city}</p>
            <button onClick={()=>{
                setCity("Mandya");
            }}>Mandya</button>
            <button onClick={()=>{
                setCity("Bangaluru");
            }}>Bangaluru</button>
        </section>
    )
}