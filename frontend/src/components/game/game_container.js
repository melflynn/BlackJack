import { connect } from 'react-redux';
import Game from './game';

const mapStateToProps = (state, ownProps) => ({
  gameId: ownProps.match.params.gameId,
  currentUser: state.session.currentUser
})

export default connect(mapStateToProps, null)(Game);
