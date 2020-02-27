import React, { useState } from "react";
import PlayerRow from "./PlayerRow";
import PlayerEditRow from "./PlayerEditRow";

export default ({ players, bgcolor, bgcolor2, Save, onDelete }) => {
  const [editId, setEditId] = useState(null);
  const handleOnEdit = markedId => {
    setEditId(markedId);
  };

  const handleOnClose = () => {
    setEditId(null);
  };

  const handleOnSave = () => {
    setEditId(null);
    Save();
  };
  return (
    <tbody>
      {players.map((player, idx) => {
        return editId === player.id ? (
          <PlayerEditRow
            key={player.id}
            player={player}
            idx={idx}
            bgcolor={bgcolor}
            bgcolor2={bgcolor2}
            onClose={handleOnClose}
            onSave={handleOnSave}
          />
        ) : (
          <PlayerRow
            key={player.id}
            player={player}
            idx={idx}
            bgcolor={bgcolor}
            bgcolor2={bgcolor2}
            onEdit={handleOnEdit}
            onDelete={onDelete}
          />
        );
      })}
    </tbody>
  );
};
