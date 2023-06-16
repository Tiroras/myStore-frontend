import { IRating } from '@/types/products.types';
import { axiosClassic, instance } from 'api/api.interceptor';
import { IResponse, IReview } from 'types';

class ReviewsService {
  create(productId: number) {
    return instance.post<IResponse<IReview>>(`/reviews/leave/${productId}`);
  }

  getAll() {
    return axiosClassic.get<IResponse<IReview[]>>('/reviews');
  }

  getAverageByProduct(productId: number) {
    return axiosClassic.get<IRating>(
      `/reviews/average-by-product/${productId}`
    );
  }
}

export default new ReviewsService();
