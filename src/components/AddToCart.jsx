import React from 'react'
import { connect } from 'react-redux'

const AddToCart = ({ product, addToCart }) => (
  <button onClick={ () => addToCart(product, 1) }>
    Add to cart
  </button>
)

const mapStateToProps = (state: State) => ({
  cartId:  state.cart ? state.cart.cartId : null,
  items: state.cart ? state.cart.items : null,
});

const mapDispatchToProps = dispatch => ({
  addToCart(item, quantity) {
      dispatch({type: 'ADD_TO_CART', payload: {item, quantity}});
  }
});

export default connect(mapStateToProps, mapDispartsToProps)(AddToCart);