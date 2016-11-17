import React, { Component } from 'react';

const TaskText = (props) => {
  console.log(props.tasks, 'text')
  return <div>
    <p>{props.tasks[props.currentTask].text}</p>
  </div>

};

export default TaskText;
