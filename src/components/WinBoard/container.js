import { connect } from 'react-redux';
import { WinBoard } from './index';

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  };
};

export default connect(mapStateToProps)(WinBoard);
