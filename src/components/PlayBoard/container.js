import { connect } from 'react-redux';
import { PlayBoard } from './index';

const mapStateToProps = (state) => ({
  players: state.players,
});

export default connect(mapStateToProps)(PlayBoard);
