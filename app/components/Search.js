import React, { Component } from 'react';

export default class Search extends Component {
  render() {
    return <div>
      <input type="text" placeholder="search" />
      <button id="search_submit">Search</button>
    </div>
  }
}