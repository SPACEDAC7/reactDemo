import React from "react";

function Beer(match){
    return (
        <li>
            <p>ID: {match.id} - Name: {match.name}</p>
        </li>

    );

}

export default Beer;