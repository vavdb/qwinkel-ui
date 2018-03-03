import * as React from 'react';
import AddToCart from './AddToCart';
import { Product, Image } from './interfaces';
import { Link } from 'react-router-dom';

const CardImage = (props: Image): JSX.Element => (
  <div className="webshop card-image">
    <figure className="image zoom">
      <img src={'http://qwinkel.quintor.nl/' + props.filePath} />
    </figure>
  </div>
);

const ProductItem = (props: Product, quantity: number, detailed: boolean) => (
  <div className="column box card is-narrow" style={{ maxWidth: 200 }}>
    {props.afbeelding && (
      <CardImage key={props.afbeelding.id} {...props.afbeelding} />
    )}

    {props.afbeeldingen &&
      props.afbeeldingen.map((afbeelding: Image) => (
        <CardImage key={afbeelding.id} {...afbeelding} />
      ))}

    <div className="card-content">
      <div className="Content">
        {props.omschrijving}
        {props.prijs}
        {props.btw}
        <AddToCart product={props} />
        <Link to={'/products/' + props.id}>Details</Link>
        <small>11:09 PM - 1 Jan 2016</small>
      </div>
    </div>
  </div>
);

export default ProductItem;
