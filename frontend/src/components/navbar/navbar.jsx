import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledNav = styled.div`
    width: 100%;
    height: 5vh;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;

    > span {
        margin: auto 5px;
        font-weight: 600;
    }

    div {
        margin: auto 0;

        button {
            margin: 0 5px;
        }
    }
`

function NavBar() {
    var hist = useHistory()

    return (
        <StyledNav>
            <span>BLACKJACK</span>
            <div>
                <Button variant="contained" color="primary" onClick={() => hist.push('/')}>
                    Splash
                </Button>
                <Button variant="contained" color="primary" onClick={() => hist.push('/home')}>
                    Home
                </Button>
            </div>
        </StyledNav>
    )
}


export default NavBar