/* tslint:disable:no-any,no-console */
import * as React from 'react';
import '../interfaces';
import './App.css';
import Product from './Product';

const logo = require('../images/logo.svg');

interface State {
  producten: Product[];
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
          <h1 className="App-title">Welkom bij qwinkel</h1>
        </header>
        <main>
          <section className="section">
            <div className="Box">
              <div className="columns is-multiline is-4">
                {this.state.producten &&
                  this.state.producten.map(product => <Product key={product.id} {...product} />)}
              </div>
            </div>
          </section>
        </main>
      </div>
    );
  }
}

export default App;
