import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import HomeContainer from './home/home_container';
import Play from './home/play';
import Rules from './home/rules';
import Layout from './home/drawer';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import { AuthRoute, ProtectedRoute, DefaultRoute } from '../util/route_util';
import GameContainer from './game/game_container';


function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/game/:gameId" component={GameContainer} />
        <Layout>
          <Switch>
            <ProtectedRoute exact path="/home" component={HomeContainer} />
            <ProtectedRoute exact path="/rules" component={Rules} />
            <ProtectedRoute exact path="/play" component={Play} />
          </Switch>
        </Layout>
        <DefaultRoute path="*" />
      </Switch>
    </div>
  );
}

export default App;
