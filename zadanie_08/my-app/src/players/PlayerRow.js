import React from 'react';

export default ({player, idx, bgcolor, bgcolor2}) => {
    return <tr key={player.id} style={{padding: '60px', backgroundColor: player.points > 100 ? bgcolor: bgcolor2 }}>
        <td style={{width: '15%'}}>{idx + 1}</td>
        <td>{player.username}</td>
        <td>{player.points}</td>
    </tr>
}