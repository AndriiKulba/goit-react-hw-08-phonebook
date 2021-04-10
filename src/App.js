import './App.css';
import React, { Component, lazy, Suspense } from 'react';
import { Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBAr/AppBar';
import Container from './components/Container/Container';
import Loader from './components/Loader';
import routes from './routes';
import { userAuthOperations, userAuthSelectors } from './redux/user';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';

import 'bootstrap/dist/css/bootstrap.min.css';
import ErrorMessage from './components/errorMessage';

const HomeView = lazy(() =>
  import('./views/HomeView' /* webpackChunkName: "home-page" */),
);
const Phonebook = lazy(() =>
  import('./views/Phonebook' /* webpackChunkName: "phonebook-page" */),
);
const LoginView = lazy(() =>
  import('./views/LoginView' /* webpackChunkName: "login-page" */),
);
const RegisterView = lazy(() =>
  import('./views/RegisterView' /* webpackChunkName: "register-page" */),
);
const NotFoundViews = lazy(() =>
  import('./views/NotFoundView' /* webpackChunkName: "notFoud-page" */),
);

class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    const { home, contacts, register, login } = routes;
    const { error } = this.props;

    return (
      <div className="App">
        <Container>
          <AppBar />
          {Boolean(error) && <ErrorMessage error={error} />}
          <Suspense fallback={<Loader />}>
            <Switch>
              <PublicRoute exact path={home} component={HomeView} />
              <PrivateRoute
                path={contacts}
                redirectTo="/login"
                component={Phonebook}
              />
              <PublicRoute
                path={register}
                restricted
                redirectTo="/"
                component={RegisterView}
              />
              <PublicRoute
                path={login}
                restricted
                redirectTo="/contacts"
                component={LoginView}
              />
              <PublicRoute component={NotFoundViews} />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  error: userAuthSelectors.getError(state),
});
const mapDispatchToProps = {
  onGetCurretnUser: userAuthOperations.getCurrentUser,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
