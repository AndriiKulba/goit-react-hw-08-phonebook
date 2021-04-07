import './App.css';
import React, { Component, lazy, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import AppBar from './components/AppBAr/AppBar';
import Container from './components/Container/Container';
import NotFoundViews from './views/NotFoundView';
import Loader from './components/Loader';
import routes from './routes';
import { userAuthOperations } from './redux/user';
import PrivateRoute from './components/PrivateRoute';
import PublicRoute from './components/PublicRoute';
import { exact } from 'prop-types';
// import 'bootstrap/dist/css/bootstrap.min.css';

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
class App extends Component {
  componentDidMount() {
    this.props.onGetCurretnUser();
  }
  render() {
    const { home, contacts, register, login } = routes;
    return (
      <div className="App">
        <Container>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={home} component={HomeView} />
              <PrivateRoute
                path={contacts}
                redirectTo="/"
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
                redirectTo="/"
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

const mapDispatchToProps = {
  onGetCurretnUser: userAuthOperations.getCurrentUser,
};

export default connect(null, mapDispatchToProps)(App);
