/* tslint:disable:no-any,no-console */

import * as React from 'react';
import './App.css';

const CardImage = (props: Image): JSX.Element => (
    <div className="webshop card-image">
        <figure className="image">
            <img src={('http://qwinkel.quintor.nl/' + props.filePath)} />
        </figure>
    </div>
);

const Product = (props: Product) => (
    <div className="column is-one-quarter box card">
        {props.afbeelding && <CardImage key={props.afbeelding.id} {...props.afbeelding} />}

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

export default Product;
