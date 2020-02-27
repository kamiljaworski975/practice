import React from 'react';
import PlayersHeading from './PlayersHeading.js';
import PlayersSummary from './PlayersSummary.js';
import PlayersContent from './PlayersContent.js';
import { fetchPlayers } from "./utlis";

class Players extends React.Component {
    state = {
        players: [],
        loading: true,
        error: null,
        highlightingColor: 'red',
        secondColor: 'green',
    };

    componentDidMount() {
        fetchPlayers()
            .then(data => this.setState({
                players: data
            }))
            .catch(err => this.setState({
                error: err
            }))
            .finally(() => this.setState({
                loading: false
            }))
    }
    handleChangeRed = () => this.setState({
        highlightingColor: 'red',
        secondColor: 'green'
    })

    handleChangeBlue = () => this.setState({
        highlightingColor: 'blue',
        secondColor: 'purple'
    })

    render() {
        if (this.state.error) {
            return <div>We can not fetch players.</div>
        }

        if (this.state.loading) {
            return <div>Loading ...</div>
        }

        return <div>
            <button onClick={this.handleChangeBlue}>Blue</button>
            <button onClick={this.handleChangeRed}>Red</button>
            <table style={{margin: '0 50px 0 50px'}}>
                <PlayersHeading />
                <PlayersContent players={this.state.players}
                bgcolor={this.state.highlightingColor}
                bgcolor2={this.state.secondColor} />
                <PlayersSummary  players={this.state.players} />
            </table>
        </div>
    }
}

export default Players;