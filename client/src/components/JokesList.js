import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { getJokes } from '../store/actions';

const JokesList = props => {
  useEffect(() => {
    if (localStorage.getItem('token')) {
      props.getJokes();
      console.log(props);
    } else {
      props.history.push('/login');
    }
  }, []);
  console.log(props);
  if (props.jokes === 0) {
    return <h1>jokes on you</h1>;
  } else {
    return (
      <div>
        {props.jokes.map(joke => (
          <h2>{joke.joke}</h2>
        ))}
      </div>
    );
  }
};

const mapStateToProps = state => ({
  jokes: state.mainReducer.jokes
});

export default connect(
  mapStateToProps,
  { getJokes }
)(JokesList);
