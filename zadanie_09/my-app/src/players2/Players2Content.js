import React from "react";
import PlayerRow from "./PlayerRow";

export default ({ players2, bgcolor, bgcolor2, onDelete }) => {
  return (
    <tbody>
      {players2.map((player, idx) => {
        return (
          <PlayerRow
            key={player.id}
            player={player}
            idx={idx}
            bgcolor={bgcolor}
            bgcolor2={bgcolor2}
            onDelete={onDelete}
          />
        );
      })}
    </tbody>
  );
};
