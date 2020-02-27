import React from "react";
import Players2Heading from "./Players2Heading.js";
import Players2Summary from "./Players2Summary.js";
import Players2Content from "./Players2Content";

export default ({
  players2,
  bgcolor,
  bgcolor2,
  changeRed,
  changeBlue,
  onDelete
}) => {
  return (
    <div>
      <button onClick={changeBlue}>Blue</button>
      <button onClick={changeRed}>Red</button>
      <table style={{ margin: "0 50px 0 50px" }}>
        <Players2Heading />
        <Players2Content
          players2={players2}
          bgcolor={bgcolor}
          bgcolor2={bgcolor2}
          onDelete={onDelete}
        />
        <Players2Summary players2={players2} />
      </table>
    </div>
  );
};
