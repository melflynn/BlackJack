import React from 'react';
import {useHistory} from 'react-router-dom';
import { Button } from '@material-ui/core'
import '../../styles/play_page.css';

function Play() {
  const history = useHistory();
  return (
    <div className="play-page">
        <div className="play-container">
          Click here to start a game
          <Button variant="contained" color="primary" className="play-button" onClick={() => history.push('/game')}>
            Play
          </Button>
        </div>
    </div>
  )
}



export default Play;