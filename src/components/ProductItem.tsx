/* tslint:disable:no-any,no-console */

import * as React from 'react';
import './App.css';
import AddToCart from './AddToCart';
import { connect } from 'react-redux';
import { Product, Image, State } from '../interfaces';

const CardImage = (props: Image): JSX.Element => (
    <div className="webshop card-image">
        <figure className="image">
            <img src={('http://qwinkel.quintor.nl/' + props.filePath)}/>
        </figure>
    </div>
);

const ProductItem = (props: Product) => (
    <div className="column is-one-quarter box card">
        {props.afbeelding && <CardImage key={props.afbeelding.id} {...props.afbeelding}/>}

        <div className="card-content">
            <div className="Content">
                {props.omschrijving}
                {props.prijs}
                {props.btw}
                <small>11:09 PM - 1 Jan 2016</small>
            </div>
        </div>
    </div>
);

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

export default connect(mapStateToProps, mapDispatchToProps)(ProductItem);
