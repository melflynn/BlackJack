import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@material-ui/core'
import { logout } from '../../actions/session_actions'
import { connect } from 'react-redux';


const mSTP = state => (
    {loggedIn: state.session.isAuthenticated}
);
  
const StyledNav = styled.div`
    width: 100%;
    height: 5vh;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto Mono', monospace;

    > span {
        margin: auto 5px;
        font-weight: 600;
        font-size: 24px;
    }

    > span:hover {
        cursor: pointer;
    }

    div {
        margin: auto 0;

        button {
            margin: 0 5px;
            font-family: 'Roboto Mono', monospace;
        }
    }
`

function NavBar({loggedIn, logout}) {
    var hist = useHistory()

    return (
        <StyledNav>
            <span onClick={() => hist.push('/')}>BLACKJACK</span>
            {!loggedIn ?
            <div>
                <Button variant="contained" color="primary" onClick={() => hist.push('/login')}>
                    Log in
                </Button>
                <Button variant="contained" color="primary" onClick={() => hist.push('/login')}>
                    Sign up
                </Button>
            </div> :
            <div>
                <Button variant="contained" color="primary" onClick={() => logout()}>
                    Log out
                </Button>
            </div>}
        </StyledNav>
    )
}


export default connect(mSTP, {logout})(NavBar)