import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Content from "./Content/content";
import Navigation from "./Navigation/nav";

import "./App.css";

class App extends React.Component {
  state = {
    players: [],
    players2: [],
    loading: true,
    error: null,
    highlightingColor: "red",
    secondColor: "green"
  };

  fetchPlayers(url, stateName) {
    fetch(url)
      .then(response => response.json())
      .then(data => {
        this.setState({
          [stateName]: data
        });
      })
      .catch(error => this.setState({ error }));
  }

  componentDidMount() {
    this.fetchPlayers("/players.json", "players");
    this.fetchPlayers("/players2.json", "players2");
    this.setState({ loading: false });
  }

  handleChangeRed = () =>
    this.setState({
      highlightingColor: "red",
      secondColor: "green"
    });

  handleChangeBlue = () =>
    this.setState({
      highlightingColor: "blue",
      secondColor: "purple"
    });

  handleOnAction = (players, player) =>
    this.setState({
      players: [...players, player]
    });

  handleOnAction2 = (players2, player) =>
    this.setState({
      players2: [...players2, player]
    });

  handleSave = () => {
    window.alert("not finished :/ i need help");
  };

  handleOnDelete = id => {
    if (window.location.href === "http://localhost:3000/players") {
      const stayPlayers = this.state.players.filter(player => player.id !== id);
      this.setState({
        players: stayPlayers
      });
    } else {
      const stayPlayers2 = this.state.players2.filter(
        player => player.id !== id
      );
      this.setState({
        players2: stayPlayers2
      });
    }
  };

  render() {
    if (this.state.error) {
      return <div>We can not fetch players.</div>;
    }

    if (this.state.loading) {
      return <div>Loading ...</div>;
    }
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navigation />
            <Content
              changeBlue={this.handleChangeBlue}
              changeRed={this.handleChangeRed}
              players={this.state.players}
              players2={this.state.players2}
              bgcolor={this.state.highlightingColor}
              bgcolor2={this.state.secondColor}
              onAdd={this.handleOnAction}
              onAdd2={this.handleOnAction2}
              Save={this.handleSave}
              onDelete={this.handleOnDelete}
            />
          </header>
        </div>
      </Router>
    );
  }
}
export default App;
