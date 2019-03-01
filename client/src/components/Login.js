import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { login } from '../store/actions';

const Login = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    props.login({ username, password });
    setUsername('');
    setPassword('');
    props.history.push('/jokes');
  };
  return (
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
  );
};

export default connect(
  null,
  { login }
)(Login);
