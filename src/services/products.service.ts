import { axiosClassic, instance } from 'api/api.interceptor';
import {
  IProduct,
  IProductList,
  IUpdateProduct,
  TDataFilters
} from 'types/products.types';

class ProductsService {
  async getAll(queryData: TDataFilters = {}) {
    const { data } = await axiosClassic<IProductList>({
      url: '/products',
      method: 'GET',
      params: queryData
    });
    return data;
  }

  async getByCategory(category: string, queryData: TDataFilters = {}) {
    const { data } = await axiosClassic.get<IProductList>(
      `/products/by-category/${category}`,
      {
        params: queryData
      }
    );
    return data;
  }

  getById(id: number) {
    return axiosClassic.get<IProduct>(`/products/${id}`);
  }

  getBySlug(slug: string) {
    return axiosClassic.get<IProduct>(`/products/by-slug/${slug}`);
  }

  getSimiliar(id: number) {
    return axiosClassic.get<IProductList>(`/products/similar/${id}`);
  }

  update(id: number, data: IUpdateProduct) {
    return instance.put<IProduct>(`/products/${id}`, {
      data
    });
  }

  create() {
    return instance.post('/products');
  }

  delete(id: number) {
    return instance.delete(`/products/${id}`);
  }

  getAverageByProduct(productId: number) {
    return axiosClassic.get<number>(`/average-by-product/${productId}`);
  }
}

export default new ProductsService();
