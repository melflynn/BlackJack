import Home from './home';
import {connect} from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  }
}

// const mapDispatchToProps = dispatch => {
//   return {

//   }
// }

export default connect(mapStateToProps, {receiveCurrentUser})(Home);