import React from "react";
import { Route, Switch } from "react-router";

import Todo from "../todo/todo";
import Sign from "../components/sign";

import { Wrapper } from "../themeComponents/wrapper";

export default () => (
  <Switch>
    <Route exact path="/">
      <Wrapper>
        <h1>Home</h1>
      </Wrapper>
    </Route>
    <Route path="/todo">
      <Wrapper>
        <h2>To Do List</h2>
      </Wrapper>
      <Todo />
    </Route>
    <Route path="/sign-in" component={Sign} />
    <Route path="/sign-up" component={Sign} />
  </Switch>
);
