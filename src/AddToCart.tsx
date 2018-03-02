import * as React from 'react';
import { connect } from 'react-redux';
import { addItemToCart } from './modules/cart';
import { Product } from './interfaces';

export const AddToCart = ({ product, addToCart }) => (
  <button onClick={() => addToCart(product, 1)}>Add to cart</button>
);

const mapStateToProps = state => ({});

const mapDispatchToProps = dispatch => ({
  addToCart(product: Product, quantity: number) {
    console.log('calling dispatch');
    dispatch(addItemToCart(product, quantity));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AddToCart);
