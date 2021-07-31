import { Switch, Route } from 'react-router-dom';
import NavBar from './navbar/navbar';
import Splash from './splash/splash'
import Login from './auth/login'
import Signup from './auth/signup'
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
        <AuthRoute path="/login" component={Login} />
        <AuthRoute path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
