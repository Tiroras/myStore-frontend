import { ICategory } from './categories.types';
import { IReview } from 'types';

export interface IProduct {
  id: number;
  name: string;
  slug: string;
  description: string;
  price: number;
  images: string[];
  category: ICategory;
  categoryId: number;
  reviews: IReview[];
}

export interface IUpdateProduct {
  name: string;
  description: string;
  price: number;
  images: string[];
  categoryId: number;
}

export interface IProductList {
  products: IProduct[];
  length: number;
}

export enum EnumProductSort {
  HIGH_PRICE = 'high-price',
  LOW_PRICE = 'low-price',
  NEWEST = 'newest',
  OLDEST = 'oldest'
}

export type TPaginationData = {
  page?: string | number;
  perPage?: string | number;
};

export type TDataFilters = TPaginationData & {
  sort?: EnumProductSort;
  searchTerm?: string;
};

export interface IRating {
  rating: number;
}
