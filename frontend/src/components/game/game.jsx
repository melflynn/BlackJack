import { useState, useEffect } from 'react';
import styled from 'styled-components';
import io from 'socket.io-client';

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
    if (hand.length <= 2) {
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
    const [hand, setHand] = useState([]);
    const [players, setPlayers] = useState([]);
    const [socket, setSocket] = useState(null);

    useEffect(() => {
    let newSocket;

    if (!socket) {
      newSocket = io.connect('/');
      setSocket(newSocket);

      newSocket.emit('join game', {
        gameId: props.gameId,
        username: props.currentUser.username
      });
    } else {
      newSocket = socket;
    }

    // newSocket.on('new message', ({ username, msg, avatar }) => {
    //   let message = [username, msg, avatar];
    //   setMessages([...messages, message]);
    // });

    // return () => newSocket.off('new message');

  }, [])

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
                    <Hand hand={hand}/>
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