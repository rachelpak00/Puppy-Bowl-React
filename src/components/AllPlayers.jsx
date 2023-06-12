import { useState, useSyncExternalStore } from "react";
import { Link } from "react-router-dom";

function AllPlayers (props) {
    const players = props.players;
    const [searchQuery, setSearchQuery] = useState("");

    const filteredPlayers = players.filter((player) => 
    player.name.toLowerCase().includes(searchQuery.toLowerCase())
    );

    return (
        <>
        <div>
            <form>
                <label htmlFor="search-query">Search By Puppy Name: </label>
                <input 
                type="text"
                value={searchQuery}
                onChange={(puppy) =>
                    setSearchQuery(puppy.target.value)}
                placeholder="Enter Name"
                ></input>
            </form>

            {
                filteredPlayers.length ? filteredPlayers.map((players) => {
                    return (
                        <div key={players.id}>
                            <h2>Name: {players.name}</h2>
                            <Link to={`/players/${players.id}`}>See Details</Link>
                        </div>
                    )
                }) : <p>Loading...</p>
            }
        </div>
      </>  
    )
}

export default AllPlayers;