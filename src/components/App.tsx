/* tslint:disable:no-any,no-console */
import * as React from 'react';
import '../interfaces';
import './App.css';
import 'react-redux';
import ProductItem from './ProductItem';
import CartDisplay from './CartDisplay';
import { connect } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import { Cart, Product, State } from '../interfaces';
const logo = require('../images/logo.svg');

class App extends React.Component<Cart, State> {
  constructor(props: any) {
    super(props);
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
        <BrowserRouter>
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welkom bij qwinkel</h1>

          </header>
          <main>
            <CartDisplay/>
            <section className="section">
              <div className="Box">
                <div className="columns is-multiline is-4">
                  {this.state && this.state.producten &&
                    this.state.producten.map(product => <ProductItem key={product.id} {...product} />)}
                </div>
              </div>
            </section>
          </main>
        </div>
        </BrowserRouter>
    );
  }
}

const mapStateToProps = (state: State) => ({
  cartId:  state.cart ? state.cart.cartId : null,
  items: state.cart ? state.cart.items : null,
});

const mapDispatchToProps = dispatch => ({
    addToCart(item: any, quantity: any) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: {
                item,
                quantity
            }
        });
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
