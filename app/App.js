import React, { Component } from 'react';
import { render } from 'react-dom';

import Search from './components/Search';

class App extends Component {
  render() {
    return <div>
      <h1>Hello World of War Craft!</h1>
      <Search />
    </div>
  }
}

render(<App />, document.getElementById('app'));