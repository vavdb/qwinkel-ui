/* tslint:disable:no-any,no-console */

import * as React from 'react';
import './index.css';

const logo = require('../../images/logo.svg');

interface State {
  producten: any;
}

class App extends React.Component<any, State> {
  constructor(props: any) { 
    super(props); 
    this.state = { producten: props.producten };
  }

  componentDidMount() {
    this.callApi()
      .then(res => this.setState({ producten: res.content }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/producten');
    const body = await response.json();

    if (response.status !== 200) { throw Error(body.message); }

    return body;
  }  
  
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to qwinkel-ui</h1>
        </header>
        <p className="App-intro">
          {JSON.stringify(this.state.producten)}
        </p>
      </div>
    );
  }
}

export default App;
