import { State, Product } from '../interfaces';

const INITIAL_STATE: State = {
  cartId: '2018-01-22:001',
  items: []
};

const ADD_ITEM_TO_CART = 'qwinkel/cart/ADD_ITEM_TO_CART';

export default function reducer(state: State = INITIAL_STATE, action: any) {
  console.log('reducer', state, action);
  switch (action.type) {
    case ADD_ITEM_TO_CART: {
      let productFound: boolean = false;
      const items = state.items.map(item => {
        if (item.product.id === action.payload.product.id) {
          productFound = true;
          return {
            product: action.payload.product,
            quantity: item.quantity + action.payload.quantity
          };
        }

        return item;
      });

      if (!productFound) {
        items.push({
          product: action.payload.product,
          quantity: action.payload.quantity
        });
      }

      return {
        ...state,
        items
      };
    }

    default:
      return state;
  }
}

export function addItemToCart(product: Product, quantity: number) {
  console.log('cart.ts -> addItemToCart ');
  return {
    type: ADD_ITEM_TO_CART,
    payload: { product, quantity }
  };
}
