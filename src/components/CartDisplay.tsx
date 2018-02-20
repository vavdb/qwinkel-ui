import * as React from 'react';
import { connect } from 'react-redux';

const CartDisplay = ({ cartId, items }) => (
  <div>
    <h2>{cartId}</h2>
    <ul>
      { items.map(item => (
        <li key={item.product.id}>
          {item.product.naam}
          <span>({item.quantity}×)</span>
        </li>
      )) }
    </ul>
  </div>
);

const mapStateToProps = state => ({
  cartId: state.cart
    ? state.cart.cartId
    : null,
  items: state.cart
    ? state.cart.items
    : null
});

const mapDispatchToProps = dispatch => ({
  addToCart(item: any, quantity: number) {
    dispatch({
      type: 'ADD_TO_CART',
      payload: {
        item,
        quantity
      }
    });
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(CartDisplay);
