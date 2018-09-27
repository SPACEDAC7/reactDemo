import React from "react";

function Beer(props){
    return (
        <li>
            <button type="text" value={props.id}>{props.name}</button>
        </li>
    );

}

export default Beer;