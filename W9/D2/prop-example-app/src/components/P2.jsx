//Props destructuring
import {React} from "react";

function UserProfile({userName,skill}){
    return(
        <div>
            <p>User: {userName}</p>
            <p>Skill: {skill}</p>
        </div>
    )
}
//Parent component
export function PropDestructuring(){
    return(
        <>
        <h2>Prop Destructuring</h2>
        <UserProfile userName="Shreyas" skill="React"/>
        </>
        
    );
}