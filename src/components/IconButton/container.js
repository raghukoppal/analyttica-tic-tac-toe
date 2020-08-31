import { connect } from 'react-redux';
import { IconButton } from './index';
import { makeOtherPlayerActive } from '../../services/players/actions';

const mapStateToProps = (state, props) => ({
  players: state.players,
});

const mapDispatchToProps = (dispatch) => ({
  makeOtherPlayerActive: (id) => dispatch(makeOtherPlayerActive(id)),
});

export default connect(mapStateToProps, mapDispatchToProps)(IconButton);
