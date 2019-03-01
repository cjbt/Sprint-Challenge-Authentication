import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { register } from '../store/actions';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.history.push('jokes');
    }
  }, []);

  const handleSubmit = e => {
    e.preventDefault();
    props.register({ username, password });
    setUsername('');
    setPassword('');
    props.history.push('/login');
  };
  return (
    <>
      <h1>Register</h1>
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

        <button type='submit'>Sign Up</button>
      </form>
    </>
  );
};

export default connect(
  null,
  { register }
)(Register);
