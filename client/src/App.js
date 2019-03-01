import React, { Component } from 'react';
import './App.css';
import { Route, NavLink } from 'react-router-dom';
import { Register, Login, JokesList } from './components';

class App extends Component {
  logout = () => {
    localStorage.removeItem('token');
    this.props.history.push('/login');
  };
  render() {
    return (
      <div className='App'>
        <nav>
          <NavLink to='/'>Register</NavLink>
          <NavLink to='/login'>Login</NavLink>
          <NavLink to='/jokes'>Jokes</NavLink>
          <button onClick={this.logout}>Logout</button>
        </nav>
        <div>
          <Route exact path='/' component={Register} />
          <Route path='/login' component={Login} />
          <Route path='/jokes' component={JokesList} />
        </div>
      </div>
    );
  }
}

export default App;
