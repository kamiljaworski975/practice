import React from "react";

import { Link } from "react-router-dom";
import { Menu } from "semantic-ui-react";

class Nav extends React.Component {
  render() {
    return (
      <Menu inverted>
        <Link to="/">
          <Menu.Item name="home" />
        </Link>
        <Link to="/players">
          <Menu.Item name="Players" />
        </Link>
        <Link to="/players2">
          <Menu.Item name="New Players" />
        </Link>
      </Menu>
    );
  }
}

export default Nav;
