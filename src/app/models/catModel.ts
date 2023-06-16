export interface CatModel {
  description: string;
  id: string;
  name: string;
  image: {
    id: string;
    url: string;
  }
  origin: string;
  temperament: string;
}
