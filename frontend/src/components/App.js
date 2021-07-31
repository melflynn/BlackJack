import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash';
import Login from './auth/login_container';
import SignupContainer from './auth/signup_container';
import LoginContainer from './auth/login_container';


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
        <Route exact path="/" component={Splash} />
        <Route exact path="/home" component={homeComponent} />
        <Route path="/login" component={LoginContainer} />
        <Route path="/signup" component={SignupContainer} />
      </Switch>
    </div>
  );
}

export default App;
