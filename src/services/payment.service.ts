import { instance } from 'api/api.interceptor';

class PaymentService {
  createPayment(amount: number) {
    return instance.post('/payment', { data: { amount } });
  }
}

export default new PaymentService();
