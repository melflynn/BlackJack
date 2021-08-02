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

    div {
        width: calc(100% - 20px);
        display: flex;
        justify-content: space-evenly;
        margin: 20px 0;
    }

    img {
        height: 152px;
        width: 100px;
    }
`
const startHand = styled.div`

`
const shownHand = styled.div`

`


const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`


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
            <InformationWrapper>
                <div>
                    Moves
                </div>
                <div>
                    Timer
                </div>
            </InformationWrapper>
            <PlayersWarpper>
                <PlayerWarpper>
                    <div>
                        <img src={require('../../images/2S.png').default} />
                        <img src={require('../../images/5S.png').default} />
                    </div>
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