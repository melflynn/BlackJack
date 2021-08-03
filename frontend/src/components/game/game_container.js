import { connect } from 'react-redux';
import Game from './game';

const mapStateToProps = (state, ownProps) => {
  return {
  gameId: ownProps.match.params.gameId,
  currentUser: state.session.user
}}

export default connect(mapStateToProps, null)(Game);
