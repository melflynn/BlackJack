import React from "react";
import { connect } from "react-redux";
import { Route, Redirect, withRouter } from "react-router-dom";


const Auth = ({ component: Component, path, currentUser, exact }) => (
  <Route
    path={path}
    exact={exact}
    render={(props) =>
      !currentUser ? (
        <Component {...props} />
      ) : (
        // Redirect to home page if the user is already authenticated
        <Redirect to="/home" />
      )
    }
  />
);

const Protected = ({ component: Component, currentUser, ...rest }) => (
  <Route
    {...rest}
    render={(props) =>
      currentUser ? (
        <Component {...props} />
      ) : (
        // Redirect to the login page if the user is not authenticated
        <Redirect to="/" />
      )
    }
  />
);

const mapStateToProps = (state) => ({
  currentUser: state.currentUser,
});

export const AuthRoute = withRouter(connect(mapStateToProps)(Auth));

export const ProtectedRoute = withRouter(connect(mapStateToProps)(Protected));