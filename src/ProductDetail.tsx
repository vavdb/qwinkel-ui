import * as React from 'react';
import AddToCart from './AddToCart';
import { Product } from './interfaces';
import ProductItem from './ProductItem';

class State {
  loading: boolean;
  product: Product | undefined;
  error: any;
}

class Props {
  productId: number;
}

export default class ProductDetail extends React.Component<Props, State> {
  fetchId: number | undefined = undefined;
  constructor(props: Props) {
    super(props);
    this.state = {
      loading: true,
      product: undefined,
      error: undefined
    };
  }

  componentDidMount() {
    this.fetchData(this.props.productId);
  }

  componentWillReceiveProps(props: Props) {
    this.fetchData(props.productId);
  }

  async fetchData(productId: number) {
    try {
      this.fetchId = productId;
      const response = await fetch(`/api/producten/${productId}`);

      if (this.fetchId !== productId) {
        return;
      }

      if (response.status === 200) {
        const body = await response.json();

        if (this.fetchId !== productId) {
          return;
        }

        this.setState({
          loading: false,
          product: body,
          error: undefined
        });
      } else {
        const error = new Error(response.statusText);
        // error.stack = response;

        this.setState({ error });
      }
    } catch (error) {
      this.setState({ error });
    } finally {
      this.fetchId = undefined;
    }
  }

  render() {
    if (this.state.error) {
      throw this.state.error;
    } else if (this.state.loading) {
      return <p>One moment please...</p>;
    } else {
      return (
        <React.Fragment>
          <section className="section">
            <div className="Box">
              <div className="columns is-multiline is-4">
                {this.state &&
                  this.state.product && (
                    <ProductItem
                      key={this.state.product.id}
                      {...this.state.product}
                    />
                  )}
              </div>
            </div>
          </section>
        </React.Fragment>
      );
    }
  }
}
