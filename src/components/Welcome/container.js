import { connect } from 'react-redux';
import { Welcome } from './index';
import { addPlayer, removePlayer } from '../../services/players/actions';

const mapStateToProps = (state) => {
  return {
    players: state.players.players,
  };
};

const mapDispatchToProps = (dispatch) => ({
  addPlayer: (id, name) => dispatch(addPlayer(id, name)),
  removePlayer: (id, name) => dispatch(removePlayer(id, name)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Welcome);
