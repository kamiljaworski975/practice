import React from "react";
import PlayersHeading from "./PlayersHeading.js";
import PlayersSummary from "./PlayersSummary.js";
import PlayersContent from "./PlayersContent.js";

export default ({
  players,
  bgcolor,
  bgcolor2,
  changeRed,
  changeBlue,
  Save,
  onDelete
}) => {
  return (
    <div>
      <button onClick={changeBlue}>Blue</button>
      <button onClick={changeRed}>Red</button>
      <table style={{ margin: "0 50px 0 50px" }}>
        <PlayersHeading />
        <PlayersContent
          players={players}
          bgcolor={bgcolor}
          bgcolor2={bgcolor2}
          Save={Save}
          onDelete={onDelete}
        />
        <PlayersSummary players={players} />
      </table>
    </div>
  );
};
