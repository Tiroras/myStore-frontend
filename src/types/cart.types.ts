import { IProduct } from './products.types';

export interface ICartItem {
  id: number;
  product: IProduct;
  quantity: number;
  price: number;
}

export type IAddToCartPayload = Omit<ICartItem, 'id'>;

export interface IChangeQuantityPayload extends Pick<ICartItem, 'id'> {
  type: 'minus' | 'plus';
}

export type TypeSize = 'SHORT' | 'TALL' | 'GRANDE' | 'VENTI';

export interface IChangeSizePayload extends Pick<ICartItem, 'id'> {
  size: TypeSize;
}
