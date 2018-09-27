import React from "react";
import { Route,Link } from "react-router-dom";

function Beer(props){
    return (
        <li>
            <Link to={/beer/`${props.id}`}>{props.name}</Link>
            <Route path={/beer/`${props.id}`} render= {({match}) =>( <div> <h3> {match.params.name} </h3></div>)}/>
        </li>

    );

}

export default Beer;