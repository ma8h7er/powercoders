export class ProductInterface {
  id: number;
  name: string;
  img?: string;
  description?: string
  price?: number;
  count?: number = 0;
}
