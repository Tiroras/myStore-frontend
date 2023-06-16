import {
  IAddToCartPayload,
  ICartItem,
  IChangeQuantityPayload
} from '@/types/cart.types';
import { PayloadAction, createSlice } from '@reduxjs/toolkit';

interface ICartInitialSate {
  items: ICartItem[];
}

const initialState: ICartInitialSate = {
  items: []
};

export const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addToCart(state, action: PayloadAction<IAddToCartPayload>) {
      const isExistSize = state.items.some(
        item => item.product.id === action.payload.product.id
      );

      if (!isExistSize) {
        state.items.push({ ...action.payload, id: state.items.length });
      }
    },
    removeFromCart(state, action: PayloadAction<{ id: number }>) {
      state.items = state.items.filter(item => item.id !== action.payload.id);
    },
    changeQuantity(state, action: PayloadAction<IChangeQuantityPayload>) {
      const { id, type } = action.payload;
      const item = state.items.find(item => item.id === id);
      if (item) type === 'plus' ? item.quantity++ : item.quantity--;
    },
    reset(state) {
      state.items = [];
    }
  }
});
