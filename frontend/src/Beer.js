import React from "react";

function Beer(props){
    return (
        <button type="text" value={props.id}>{props.name}</button>
    );

}

export default Beer;