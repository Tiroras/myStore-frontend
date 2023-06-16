import { ICartItem } from '@/types/cart.types';
import { instance } from 'api/api.interceptor';
import { IOrder } from 'types';

class OrdersService {
  async getAll() {
    const { data } = await instance.get<IOrder[]>('/orders');
    return data;
  }

  postOrder(items: ICartItem[]) {
    return instance.post('/orders', {
      items: items.map(item => ({
        price: item.price,
        productId: item.product.id,
        quantity: item.quantity
      }))
    });
  }
}

export default new OrdersService();
