
export interface Product {
  id: number;
  naam: string;
  omschrijving: string;
  prijs: number;
  btw: number;
  youtubeUrl: string;
  afbeelding: Image;
}

export interface Image {
  id: number;
  filePath: string;
}

export interface Cart {
  cartId: number;
  items: Product[];
}

export interface State {
  cart: Cart;
  producten: Product[];
}