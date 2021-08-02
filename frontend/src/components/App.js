import { Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import { AuthRoute, ProtectedRoute, DefaultRoute } from '../util/route_util';
import Home from './home/home';
import GameContainer from './game/game_container';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/home" component={Home} />

        {/* This will be changed, final route should be /game/:gameid */}
        <ProtectedRoute exact path="/game/:gameId" component={GameContainer} />
        <DefaultRoute path="*" />
      </Switch>
    </div>
  );
}

export default App;
