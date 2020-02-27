import React from 'react';
import PlayerRow from "./PlayerRow";

export default ({players, bgcolor, bgcolor2}) => {    
    return <tbody>
    {
        
        players.map((player, idx) => {
            return <PlayerRow  key={player.id} player={player} idx={idx} bgcolor={bgcolor} bgcolor2={bgcolor2}/>
        })
    }
    </tbody>
}