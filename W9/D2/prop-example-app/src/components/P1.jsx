import { React } from "react";
//Props basics
//Child Component
function WelcomeCard(props) {
    return (
        <div className="card">
            <h2>Hello,{props.name}</h2>
            <p>Role: {props.role}</p>
        </div>
    )
}
//Parent component
export function PropBasics() {
    return (
        <>
            <WelcomeCard name="Shreyas" role="React developer" />
            <WelcomeCard name="developer" role="UI/UX developer" />

        </>
    );
}