import React from "react";
import { Route, Switch } from "react-router-dom";

import Players from "../players/Players";
import Players2 from "../players2/Players2";
import PlayersForm from "../Components/form";

export default ({
  players,
  players2,
  bgcolor,
  bgcolor2,
  changeRed,
  changeBlue,
  onAdd,
  onAdd2,
  Save,
  onDelete
}) => (
  <Switch>
    <Route exact path="/">
      <h1>Home</h1>
    </Route>
    <Route path="/players">
      <Players
        players={players}
        bgcolor={bgcolor}
        bgcolor2={bgcolor2}
        changeRed={changeRed}
        changeBlue={changeBlue}
        Save={Save}
        onDelete={onDelete}
      />
      <PlayersForm onAdd={onAdd} players={players} />
    </Route>
    <Route path="/players2">
      <Players2
        players2={players2}
        bgcolor={bgcolor}
        bgcolor2={bgcolor2}
        changeRed={changeRed}
        changeBlue={changeBlue}
        onDelete={onDelete}
      />
      <PlayersForm onAdd2={onAdd2} players2={players2} />
    </Route>
  </Switch>
);
