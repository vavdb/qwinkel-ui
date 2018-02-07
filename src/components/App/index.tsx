import * as React from 'react';
import './index.css';

const logo = require('../../images/logo.svg');

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to qwinkel-ui</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/components/App/index.tsx</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
