import React, { Component } from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import store from './store/makeStore';

import TopNav from './containers/TopNav.container';
import ContentList from './containers/ContentList.container';
import TextContainer from './containers/TextContainer.container';

class App extends Component {
  render() {
    return <div>
      <TopNav />
      <ContentList />
      <TextContainer />
    </div>
  }
}

render(<Provider store={store}>
    <App />
</Provider>, document.getElementById('app'));