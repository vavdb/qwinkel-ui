export interface Product {
  id: number;
  naam: string;
  omschrijving: string;
  prijs: number;
  btw: number;
  youtubeUrl: string;
  afbeelding: Image;
  afbeeldingen: Image[];
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export interface Image {
  id: number;
  filePath: string;
}

export interface State {
  cartId: string;
  items: CartItem[];
}
