import React, { Component } from 'react';

const Title = (props) => {
  console.log('props', props);
  return <div>
    <button onClick={props.onPreviousClick}>Previous</button>
    <h1>{props.tasks[props.currentTask].title}</h1>
    <button onClick={props.onNextClick}>Next</button>
  </div>
}

export default Title;
