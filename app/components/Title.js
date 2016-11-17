import React, { Component } from 'react';

const Title = (props) => {
  console.log('props', props);
  return <div>
    <button>Previous</button>
    <h1>{props.tasks[props.currentTask].title}</h1>
    <button>Next</button>
  </div>
}

export default Title;
