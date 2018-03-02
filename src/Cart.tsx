import * as React from 'react';
import { connect } from 'react-redux';
import { State } from './interfaces';

export const Cart = ({ cartId, items }) => (
  <div>
    <h2>{cartId}</h2>
    <ul>
      {items.map(item => (
        <li key={item.product.id}>
          {item.product.naam}
          <span>({item.quantity}×)</span>
        </li>
      ))}
    </ul>
  </div>
);

const mapStateToProps = (state: State) => ({
  cartId: state.cartId,
  items: state.items
});

export default connect(mapStateToProps)(Cart);
