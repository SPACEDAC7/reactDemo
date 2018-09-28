import React from "react";
import { Route,Link } from "react-router-dom";

function Beer(props){
    return (
        <li>
            <Link to={`/beer/${props.id}`}>{props.name}</Link>
            <Route path={`/beer/${props.id}`} component={BeerDetails}/>
        </li>

    );

}

const BeerDetails = ({ match }) => (
    <div>
        <h3>ID: {match.params.id}</h3>
    </div>
);

export default Beer;