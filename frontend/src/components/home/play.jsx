import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core'
import '../../styles/play_page.css';

function Play() {
  const history = useHistory();

  const rng = () => {
    return Math.floor(Math.random() * 100000000);
  }
  return (
    <div className="play-page">
        <div className="play-container">
          Click here to start a game
          <Button variant="contained" color="primary" className="play-button" onClick={() => history.push(`/game/${rng()}`)}>
            Play
          </Button>
        </div>
    </div>
  )
}



export default Play;