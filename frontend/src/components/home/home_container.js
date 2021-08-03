import Home from './home';
import {connect} from 'react-redux';
import { receiveCurrentUser } from '../../actions/session_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user
  }
}

export default connect(mapStateToProps, {receiveCurrentUser})(Home);