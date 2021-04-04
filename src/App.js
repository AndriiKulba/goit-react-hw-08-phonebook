import './App.css';
import React, { Component, Suspense } from 'react';
import { Switch, Route } from 'react-router-dom';
import AppBar from './components/AppBAr/AppBar';
import Container from './components/Container/Container';
import HomeView from './views/HomeView';
import Phonebook from './views/Phonebook';
import LoginView from './views/LoginView';
import RegisterView from './views/RegisterView';
import NotFoundViews from './views/NotFoundView';
import Loader from './components/Loader';
import routes from './routes';

// import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    const { home, contacts, register, login } = routes;
    return (
      <div className="App">
        <Container>
          <AppBar />
          <Suspense fallback={<Loader />}>
            <Switch>
              <Route exact path={home} component={HomeView} />
              <Route path={contacts} component={Phonebook} />
              <Route path={register} component={RegisterView} />{' '}
              <Route path={login} component={LoginView} />
              <Route component={NotFoundViews} />
            </Switch>
          </Suspense>
        </Container>
      </div>
    );
  }
}

export default App;
