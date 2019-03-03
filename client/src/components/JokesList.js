import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../store/actions';

const JokesList = props => {
  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      props.getJokes();
      console.log(props);
    }
  }, [props.loginSuccess]);
  console.log(props);
  if (!localStorage.getItem('token')) {
    return <h1>jokes on you, please Login</h1>;
  } else {
    return (
      <div>
        {props.jokes.map(joke => (
          <h2 key={joke.id}>{joke.joke}</h2>
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  jokes: state.mainReducer.jokes,
  loginSuccess: state.mainReducer.loginSuccess
});

export default connect(
  mapStateToProps,
  { getJokes }
)(JokesList);
