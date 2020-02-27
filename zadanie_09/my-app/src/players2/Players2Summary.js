import React from "react";

export default ({ players2 }) => {
  const getTotal = () => {
    return players2.reduce((acc, player) => acc + player.points, 0);
  };

  const getAverage = () => {
    return Math.floor(getTotal() / players2.length);
  };

  return (
    <tfoot>
      <tr>
        <th>Total</th>
        <th></th>
        <th>{getTotal()}</th>
      </tr>

      <tr>
        <th>Average</th>
        <th></th>
        <th>{getAverage()}</th>
      </tr>
    </tfoot>
  );
};
