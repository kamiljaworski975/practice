import React from "react";
import { Button, Form, Icon } from "semantic-ui-react";

class PlayerEditRow extends React.Component {
  state = {
    ...this.props.player
  };

  handleOnChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleOnSaveClick = () => {
    this.props.onSave();
  };

  handleOnCloseClick = () => {
    this.props.onClose();
  };

  render() {
    const { username, points } = this.state;

    return (
      <tr key={this.props.player.id}>
        <td style={{ width: "15%" }}>{this.props.idx + 1}</td>
        <td>
          <Form.Field>
            <input
              value={username}
              name="username"
              onChange={this.handleOnChange}
            />
          </Form.Field>
        </td>
        <td>
          <Form.Field>
            <input
              value={points}
              name="points"
              onChange={this.handleOnChange}
            />
          </Form.Field>
        </td>
        <td>
          <Button positive icon onClick={this.handleOnSaveClick}>
            <Icon name="save" />
          </Button>
        </td>
        <td>
          <Button icon onClick={this.handleOnCloseClick}>
            <Icon name="close" />
          </Button>
        </td>
      </tr>
    );
  }
}

export default PlayerEditRow;
