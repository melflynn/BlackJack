import { Switch } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import { AuthRoute, ProtectedRoute, DefaultRoute } from '../util/route_util'


function HomeComponent() {
  return (
    <div>
      yo yo ma
    </div>
  )
}

function GameComponent() {
  return (
    <div>
      this is the game
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <AuthRoute path="/login" component={LoginContainer} />
        <AuthRoute path="/signup" component={SignupContainer} />
        <ProtectedRoute exact path="/home" component={HomeComponent} />
        <ProtectedRoute exact path="/game" component={GameComponent} />
        <DefaultRoute path="*" />
      </Switch>
    </div>
  );
}

export default App;
