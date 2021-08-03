import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Button } from '@material-ui/core'
import io from 'socket.io-client';

const InformationWrapper = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    
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

const LinkWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20vh 0 0;
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
    const [socket, setSocket] = useState(null);
    const [gameState, setGameState] = useState(null);

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

        newSocket.on('new message', (payload) => {
            setGameState(JSON.parse(payload))
        });

    }, [])

    const startGame = (e) => {
        e.preventDefault();
        socket.emit('start game', {game: 'testing'})
    }

    const hit = (e) => {
        e.preventDefault();
        socket.emit('hit')
    }

    const stand = (e) => {
        e.preventDefault();
        socket.emit('stand')
    }

    const restartGame = (e) => {
        e.preventDefault();
        socket.emit('restart game')
    }


    const calcWon = (myhand, house) => {
        if (myhand.reduce((acc, curr) => acc + curr.value, 0) > 21) {
            return 'lost'
        } else {
            if (house.reduce((acc, curr) => acc + curr.value, 0) > 21) {
                return 'won'
            }
            if (myhand.reduce((acc, curr) => acc + curr.value, 0) > house.reduce((acc, curr) => acc + curr.value, 0)) {
                return 'won'
            } else if (myhand.reduce((acc, curr) => acc + curr.value, 0) === house.reduce((acc, curr) => acc + curr.value, 0)) {
                return 'draw'
            } else {
                return 'lost'
            }
        }
    }

    return (gameState && (
        <MainWrapper>
            <InformationWrapper>
                <div>
                    Moves
                    {gameState.players[gameState.currentPlayer].username === props.currentUser.username && gameState.gameState != 'waiting' &&
                    <div>
                        <Button variant='contained' color='primary' onClick={(e) => hit(e)}>
                            Hit
                        </Button>
                        <Button variant='contained' color='primary' onClick={(e) => stand(e)}>
                            Stand
                        </Button>
                    </div>}
                </div>
                <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
                    <PlayerWarpper style={gameState.currentPlayer === 0 ? {backgroundColor: 'lightgreen'} : {}}>
                        House
                        {gameState.currentPlayer === 0 ?
                            <Hand hand={gameState.players[0].hand.map((card) => (card.name))} /> 
                            :
                            <Hand hand={['back', gameState.players[0].hand[1].name]}/> 
                        }
                        {gameState.currentPlayer === 0 ?
                            `Value: ${gameState.players[0].hand.reduce((acc, curr) => acc + curr.value, 0)}`
                            : null}
                    </PlayerWarpper>
                    <div>
                        {gameState.gameState == 'waiting' && 
                        <Button variant='contained' color='primary' onClick={(e) => startGame(e)}>
                            Start
                        </Button>}

                        {gameState.gameState == 'finished' &&
                        <Button variant='contained' color='primary' onClick={(e) => restartGame(e)}>
                            Restart
                        </Button>}
                    </div>
                </div>
                <div>
                </div>
            </InformationWrapper>
            <LinkWrapper>
                To Invite someone, simply copy the link below and send it to them.
                <span>
                    {`https://blackjack-mintbean.herokuapp.com/#/game/${props.gameId}`}
                </span>
            </LinkWrapper>
            <PlayersWarpper>
                {gameState.players.slice(1).map((player, index) => (
                    <PlayerWarpper key={index} style={{backgroundColor: gameState.players[gameState.currentPlayer].username === player.username ? 'lightgreen' : null}}>
                        {player.username}
                        <Hand hand={player.hand.map((card) => (card.name))} />
                        {player.hand.reduce((acc, curr) => acc + curr.value, 0) > 21 ? 'Bust' : `Value: ${player.hand.reduce((acc, curr) => acc + curr.value, 0)}`}
                        <div>
                            {gameState.gameState == 'finished' ? calcWon(player.hand, gameState.players[0].hand) : null}
                        </div>
                    </PlayerWarpper>
                ))}

                {new Array(5 - gameState.players.length + 1).fill(0).map((_, index) => (
                    <PlayerWarpper key={index}>
                        Empty Seat
                    </PlayerWarpper>))
                }
            </PlayersWarpper>
        </MainWrapper>
    ))
}

export default Game