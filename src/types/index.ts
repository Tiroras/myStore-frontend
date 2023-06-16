import { IProduct } from './products.types';
import { IUser } from './user.types';
import { Dispatch, SetStateAction } from 'react';

enum EnumOrderStatus {
  PENDING = 'PENDING',
  PAYED = 'PAYED',
  SHIPPED = 'SHIPPED',
  DELIVERED = 'DELIVERED'
}

export interface IOrder {
  id: number;
  createAt: string;
  updateAt: string;
  status: EnumOrderStatus;
  items: IOrderItem[];
  user: IUser;
  userId: number;
}

export interface IOrderItem {
  id: number;
  createAt: string;
  updateAt: string;
  quantity: number;
  price: number;
  order: IOrder;
  orderId: number;
  product: IProduct;
  productId: number;
}

export interface IReview {
  id: number;
  createAt: string;
  rating: number;
  text: string;
  user: IUser;
}

export interface IResponse<T> {
  data: T;
}

export interface TypeOut {
  ref: any;
  isVisible: boolean;
  setIsVisible: Dispatch<SetStateAction<boolean>>;
}
