import React from "react";
import { Button, Form } from "semantic-ui-react";

const initialFormState = {
  username: "",
  points: 0
};

class PlayersForm extends React.Component {
  state = {
    ...initialFormState
  };

  handleOnChange = event => {
    this.setState({
      username: event.target.value
    });
  };

  handleOnClick = event => {
    event.preventDefault();
    this.setState({
      username: ""
    });
    const { username } = this.state;

    if (window.location.href === "http://localhost:3000/players") {
      const player = {
        id: this.props.players.length + 1,
        username: username,
        points: Math.floor(Math.random() * (200 - 0 + 1)) + 0
      };
      this.props.onAdd(this.props.players, player);
    } else {
      const player = {
        id: this.props.players2.length + 1,
        username: username,
        points: Math.floor(Math.random() * (200 - 0 + 1)) + 0
      };
      this.props.onAdd2(this.props.players2, player);
    }
  };

  render() {
    const { username } = this.state;

    return (
      <Form>
        <h2>Add Player</h2>
        <Form.Field>
          <label>Name</label>
          <input
            value={username}
            onChange={this.handleOnChange}
            name="username"
            placeholder="userName"
          />
        </Form.Field>
        <Button type="submit" onClick={this.handleOnClick}>
          Add
        </Button>
      </Form>
    );
  }
}

export default PlayersForm;
