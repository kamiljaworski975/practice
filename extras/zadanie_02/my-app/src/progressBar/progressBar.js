import React from "react";
import { Progress, Button } from "semantic-ui-react";

import { RowBtn } from "../themeComponents/row-btn";

class ProgressBar extends React.Component {
  state = {
    percent: 50,
    colors: "yellow"
  };

  increment = () => {
    this.setState(
      prevState => ({
        percent:
          prevState.percent >= 100 || prevState.percent + 5 >= 100
            ? 100
            : prevState.percent + 5
      }),
      () => {
        this.changeOnColor();
      }
    );
  };
  decrement = () => {
    this.setState(
      prevState => ({
        percent:
          prevState.percent <= 0 || prevState.percent - 5 <= 0
            ? 0
            : prevState.percent - 5
      }),
      () => {
        this.changeOnColor();
      }
    );
  };

  changeOnColor = () => {
    const { percent } = this.state;
    if (percent <= 30) {
      this.setState({
        colors: "red"
      });
    } else if (percent <= 60) {
      this.setState({
        colors: "yellow"
      });
    } else if (percent <= 80) {
      this.setState({
        colors: "olive"
      });
    } else {
      this.setState({
        colors: "green"
      });
    }
  };

  render() {
    return (
      <div>
        <div>
          <Progress
            percent={this.state.percent}
            color={this.state.colors}
            progress
            size={"large"}
          />
        </div>
        <RowBtn>
          <Button onClick={this.decrement}>Decrement</Button>
          <Button onClick={this.increment}>Increment</Button>
        </RowBtn>
      </div>
    );
  }
}

export default ProgressBar;
