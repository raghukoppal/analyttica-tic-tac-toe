import { connect } from 'react-redux';
import { GameBoard } from './index';

const mapStateToProps = (state, props) => ({
  players: state.players.players,
  playSquares: state.playSquares.playSquares,
});

export default connect(mapStateToProps)(GameBoard);
