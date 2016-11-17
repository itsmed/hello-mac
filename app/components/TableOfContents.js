import React, { Component } from 'react';

const TableOfContents = (props) => {
  return <ul>
    {props.tasks.map((task) =><li key={task.id}>{task.title}</li>)}
  </ul>
}

export default TableOfContents;
