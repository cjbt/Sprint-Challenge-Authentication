import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';
import JokesList from './JokesList';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.history.push('jokes');
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.login({ username, password });
    setUsername('');
    setPassword('');
    props.history.push('/jokes');
  };
  return (
    <>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type='text'
          value={username}
          onChange={e => setUsername(e.target.value)}
          placeholder='username'
        />
        <input
          type='text'
          value={password}
          onChange={e => setPassword(e.target.value)}
          placeholder='password'
        />

        <button type='submit'>Log In</button>
      </form>
    </>
  );
};

export default connect(
  null,
  { login }
)(Login);
