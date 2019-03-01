import React, { useEffect, useState } from 'react';

const Register = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
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

      <button type='submit'>Sign Up</button>
    </form>
  );
};

export default Register;
