import React from "react";
import { Button, Icon } from "semantic-ui-react";

export default ({ player, idx, bgcolor, bgcolor2, onDelete }) => {
  const handleOnDeleteClick = () => {
    onDelete(player.id);
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
        <Button negative icon onClick={handleOnDeleteClick}>
          <Icon name="trash" />
        </Button>
      </td>
    </tr>
  );
};
