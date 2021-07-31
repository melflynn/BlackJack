import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';
import { AuthRoute, ProtectedRoute } from '../util/routeUtil'


function homeComponent() {
  return (
    <div>
      home
    </div>
  )
}

function App() {
  return (
    <div>
      <NavBar />
      <Switch>
        <AuthRoute exact path="/" component={Splash} />
        <ProtectedRoute exact path="/home" component={homeComponent} />
        <AuthRoute path="/login" component={LoginContainer}} />
        <AuthRoute path="/signup" component={SignupContainer} />
      </Switch>
    </div>
  );
}

export default App;
