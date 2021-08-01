import { Button } from '@material-ui/core'
import { useHistory } from 'react-router-dom'

function Home() {
    const hist = useHistory()

    return (
      <div>
        yo yo ma
        {/* Placeholder for now, theoretically pressing this button should 
        generate a new game on the backend and will push the currentuser to the url with that gameid */}
        <Button variant="contained" color="primary" onClick={() => hist.push('/game')}>
                    Click to enter game
        </Button>
      </div>
    )
}

export default Home