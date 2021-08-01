import {useState} from 'react';
import styled from 'styled-components'
import {Button} from '@material-ui/core'

const InformationWrapper = styled.div`
    width: 70%;
    display: flex;
    justify-content: space-between;
`

const PlayersWarpper = styled.div`
    position: fixed;
    bottom: 50px;
    width: 100%;
    display: flex;
    justify-content: space-between;
`

const PlayerWarpper = styled.div`
    width: 13vw;
    min-width: 250px;
    height: calc(13vw);
    min-height: 250px;
    background-color: lightcyan;
    margin: 0 20px;
    display: flex;
    flex-direction: column;
    align-items: center;

`
const StartHand = styled.div`
    width: calc(100% - 20px);
    display: flex;
    justify-content: space-evenly;
    margin: 20px 0;

    img {
        height: 152px;
        width: 100px;
    }
`
const ShownHand = styled.div`
    width: 150px;
    display: flex;
    margin: 20px 0;

    div {
        flex: 1 0 0;
        overflow-x: hidden;
    }

    div:last-child {
        flex: 0 0 auto;
    }

    img {
        height: 152px;
        width: 100px;
    }
`


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`
const Hand = ({hand}) => {
    if (hand.length == 2) {
        return (
            <StartHand>
                {hand.map((card, index) => <img key={index} src={require('../../images/' + card + '.png').default} />)}
            </StartHand>
        )
    } return (
        <ShownHand style={{width: `${(hand.length) * 50}px`}}>
            {hand.map((card, index) => (<div key={index}>
                    <img src={require('../../images/' + card + '.png').default} />
                </div>))}
        </ShownHand>
    )
}

const Game = (props) => {
    const [balance, setBalance] = useState(1000);
    const [hand, setHand] = useState(['2D', '4H', '5C', '2S']);
    const [players, setPlayers] = useState({});
    const Deck = ['2S', '2C', '2D', '2H', '3S', '3C', '3D', '3H', '4S', '4C', '4D', '4H', '5S', '5C', '5D', '5H', '6S', '6C', '6D', '6H', '7S', '7C', '7D', '7H', '8S', '8C', '8D', '8H', '9S', '9C', '9D', '9H', '10S', '10C', '10D', '10H', 'KS', 'KC', 'KD', 'KH', 'QS', 'QC', 'QD', 'QH', 'JS', 'JC', 'JD', 'JH', 'AS', 'AC', 'AD', 'AH']
    const [house, setHouse] = useState(['back', 'back'])
    
    return (
        <MainWrapper>
            <Button variant='contained' color='primary'>
                Start
            </Button>
            <InformationWrapper>
                <div>
                    Moves
                </div>
                <div>
                    House
                </div>
                <div>
                    Timer
                </div>
            </InformationWrapper>
            <PlayersWarpper>
                <PlayerWarpper>
                    {/* <StartHand>
                        <img src={require('../../images/2S.png').default} />
                        <img src={require('../../images/5S.png').default} />
                    </StartHand> */}
                    <Hand hand={hand}/>
                    <span>Balance: {balance}</span>
                </PlayerWarpper>
                <PlayerWarpper>
                    p2
                </PlayerWarpper>
                <PlayerWarpper>
                    me
                </PlayerWarpper>
                <PlayerWarpper>
                    p4
                </PlayerWarpper>
                <PlayerWarpper>
                    p5
                </PlayerWarpper>
            </PlayersWarpper>
        </MainWrapper>
    )
}

export default Game