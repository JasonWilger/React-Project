import React from 'react'
import Buttons from '../containers/buttonContainer'


const defaultState = {
    max: 9
}

class Board extends React.Component{
    constructor(props){
        super(props);
        this.state = defaultState
    }

    _renderBoard() {
        let newButtons = []

        for(let i = 1;i <= this.state.max; i++){
            newButtons.push(i)
        }
        
        return(
        <>
            {newButtons.map(buttonValue => (
            <Buttons value={buttonValue} key={buttonValue}/>
            ))}
        </>
        )
    }
    
    _startGameClick() {
        const startGame = this.props.startGameClick;
        const glow = this.props.glow;
        try {
            startGame()
        }catch (error) {
            console.log(error)
        } finally {
            glow()
        }
    }
    

    render() {
        return (
            <div className="game-container">
                <h1 id="round-counter">ROUND:{this.props.round.length === 0 ? null : this.props.round.length}</h1>
                <div className="game-board">
                    {this._renderBoard()}
                </div>
                <div className="game-buttons">
                    <button className="btn btn-success" id="start-game" onClick={() => this._startGameClick()}>Start Game</button>
                    <button className="btn btn-danger" id="reset-game" onClick={() => this.props.resetGameClick()}>Reset Game</button>
                </div>
                <div id="game-message"></div>
            </div>
        )
    }
}
export default Board