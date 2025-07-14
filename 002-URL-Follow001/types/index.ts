// types/index.ts
export type ProductImage = string;

export interface Product {
  name: string;
  date: string;
  slug: string;
  description: string;
  images: ProductImage[];
}
