//Nested dynamic Routes
import {useParams, Link, Outlet} from "react-router-dom";

export function NestedDynamicRoutes() {
    const {courseId} = useParams();
    return(
        <div>
            <h2>Nested Dynamic Routes</h2>
            <p>Course id: {courseId}</p>
            <nav>
                <Link to={`/courses/${courseId}/modules/1`}>module 1</Link> | { ' '}
                <Link to={`/courses/${courseId}/modules/2`}>module 2</Link> | { ' '}
            </nav>
            <hr />
            <Outlet/>
        </div>
    );
}