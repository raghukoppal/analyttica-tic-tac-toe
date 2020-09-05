import { connect } from 'react-redux';
import { WinBoard } from './index';

const mapStateToProps = (state) => ({
  players: state.players.players,
});

export default connect(mapStateToProps)(WinBoard);
