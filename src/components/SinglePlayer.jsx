import React from "react";
import { useParams } from "react-router-dom";

function SinglePlayer (props) {
    const {id} = useParams(); 

    const players = props.players 

    const specificPlayer = players.filter((puppy) => {
        if (puppy.id == Number(id)) {
            return puppy
        }
    })

    return (
        <div>
            <h2>Name: {specificPlayer[0].name}</h2>
            <p>Breed: {specificPlayer[0].breed}</p>
            <p>Status: {specificPlayer[0].status}</p>
            <img src={specificPlayer[0].imageUrl} ></img>

        </div>
    )

}

export default SinglePlayer;