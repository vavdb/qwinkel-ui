interface Product {
  id: number;
  naam: string;
  omschrijving: string;
  prijs: number;
  btw: number;
  youtubeUrl: string;
  afbeelding: Image;
}

interface Image {
  id: number;
  filePath: string;
}