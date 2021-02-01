import Board from '../components/board';
import { connect } from 'react-redux';

import { startGame, resetGame, glow } from '../actions';

function mapStateToProps(state) {
    console.log(state)
    return {
        // propName seen by React : value-in-state
        playerPattern: state.playerPattern,
        pattern: state.pattern,
        round: state.round
    }
}

function mapDispatchToProps(dispatch) {
    return {
        // Translate redux dispatch into props
        startGameClick: () => {
            dispatch(startGame());
        },
        resetGameClick: () => {
            dispatch(resetGame());
        },
        glow: () => {
            dispatch(glow());
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Board);