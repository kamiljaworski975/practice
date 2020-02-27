import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default ({ player, idx, bgcolor, bgcolor2, onEdit, onDelete }) => {
  const handleOnDeleteClick = () => {
    onDelete(player.id);
  };
  const handleOnEditClick = () => {
    onEdit(player.id);
  };

  return (
    <tr
      key={player.id}
      style={{
        padding: "60px",
        backgroundColor: player.points > 100 ? bgcolor : bgcolor2
      }}
    >
      <td style={{ width: "15%" }}>{idx + 1}</td>
      <td>{player.username}</td>
      <td>{player.points}</td>
      <td style={{ backgroundColor: "#282c34" }}>
        <Button primary icon onClick={handleOnEditClick}>
          <Icon name="edit" />
        </Button>
      </td>
      <td style={{ backgroundColor: "#282c34" }}>
        <Button negative icon onClick={handleOnDeleteClick}>
          <Icon name="trash" />
        </Button>
      </td>
    </tr>
  );
};
