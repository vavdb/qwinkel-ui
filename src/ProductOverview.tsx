import * as React from 'react';
import { Product } from './interfaces';
import ProductItem from './ProductItem';

class State {
  loading: boolean;
  products: any[];
  error: any;
}

export default class ProductOverview extends React.Component<any, State> {
  state = {
    loading: true,
    products: [],
    error: undefined
  };
  componentDidMount() {
    this.fetchProducten();
  }

  componentWillReceiveProps() {
    this.fetchProducten();
  }

  fetchProducten() {
    this.callApi()
      .then(res => this.setState({ loading: false, products: res.content }))
      .catch(err => console.log(err));
  }

  callApi = async () => {
    const response = await fetch('/api/producten');
    const body = await response.json();

    if (response.status !== 200) {
      throw Error(body.message);
    }

    return body;
  }

  render() {
    if (this.state.error) {
      throw this.state.error;
    }

    return (
      <React.Fragment>
        <h1>Products</h1>
        {this.renderHelper()}
      </React.Fragment>
    );
  }

  renderHelper() {
    if (this.state.loading) {
      return <p>One moment please...</p>;
    } else {
      return (
        <section className="section">
          <div className="Box">
            <div className="columns is-multiline is-8">
              {this.state &&
                this.state.products &&
                this.state.products.map((product: Product) => (
                  <ProductItem key={product.id} {...product} />
                ))}
            </div>
          </div>
        </section>
      );
    }
  }
}
