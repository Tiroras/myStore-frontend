import { axiosClassic, instance } from 'api/api.interceptor';
import { IResponse } from 'types';
import { ICategory, IUpdateCategoryData } from 'types/categories.types';

class CategoriesService {
  getAll() {
    return axiosClassic.get<ICategory[]>('/categories');
  }

  getById(id: number) {
    return axiosClassic.get<IResponse<ICategory>>(`/categories/${id}`);
  }

  getBySlug(slug: string) {
    return axiosClassic.get<IResponse<ICategory>>(
      `/categories/by-slug/${slug}`
    );
  }

  create() {
    return instance.post<IResponse<ICategory>>('/categories');
  }

  update(id: number, data: IUpdateCategoryData) {
    return instance.put<IResponse<ICategory>>(`/categories/${id}`, { data });
  }

  delete(id: number) {
    return instance.delete(`/categories/${id}`);
  }
}

export default new CategoriesService();
