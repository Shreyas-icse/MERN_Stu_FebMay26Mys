//Multiple Dynamic Params
import {useParams} from "react-router-dom";

export function MultipleDynamicParams() {
    const{ userId,orderID} = useParams();
    return(
        <div>
            <h2>Multiple Dynamic Params</h2>
            <p>User ID from URL  : {userId} </p>
            <p>Order ID from URL  : {orderID} </p>

        </div>
    ); 
}