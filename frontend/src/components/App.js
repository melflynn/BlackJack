import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash'
import Login from './auth/login'
import Signup from './auth/signup'


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
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
