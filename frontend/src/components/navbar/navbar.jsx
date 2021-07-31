import { useHistory } from 'react-router-dom'
import styled from 'styled-components'
import { Button } from '@material-ui/core'

const StyledNav = styled.div`
    width: 100%;
    height: 5vh;
    background-color: lightblue;
    display: flex;
    justify-content: space-between;
    font-family: 'Roboto Mono', monospace;

    span {
        margin: auto 10px;
        font-weight: 600;
        font-family: 'Roboto Mono', monospace;
    }

    > span:hover {
        cursor: pointer;
    }

    div {
        margin: auto 0;

        button {
            margin: 0 10px;
        }
    }
`

function NavBar() {
    var hist = useHistory()

    return (
        <StyledNav>
            <span onClick={() => hist.push('/')}>BLACKJACK</span>
            <div>
                <Button variant="contained" color="primary" onClick={() => hist.push('/home')}>
                    Home
                </Button>
            </div>
        </StyledNav>
    )
}


export default NavBar