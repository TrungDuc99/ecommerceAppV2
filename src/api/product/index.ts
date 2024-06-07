import { showErrorMessage } from '@/ui';

import axiosClient from '../common/axios-client';
import type { ProductsByCategoryRes } from './types';

const productApi = {
  getOne: (): Promise<any> => {
    return axiosClient.post('/product/detail');
  },
  getProductsByCategoryId: ({ categoryId, Price }: any): Promise<any> => {
    const url = `/category/products?categoryId=${categoryId}&Price=${Price}0&additionalProp1=string&additionalProp2=string&additionalProp3=string`;
    return axiosClient.get(url);
  },
};

const productService = {
  getAll: async (): Promise<ProductsByCategoryRes | undefined> => {
    try {
      const res = await productApi.getOne();
      if (res) {
        return res;
      }
    } catch (error: any) {
      showErrorMessage(
        `Đã xảy ra lỗi,  không thể lấy danh mục ${
          error?.error
            ? error?.error
            : error?.message
            ? error?.message
            : 'vui lòng thử lại sau'
        }`
      );

      throw error;
    }
  },
  getProductByCategoryId: async (
    categoryId: number
  ): Promise<ProductsByCategoryRes | undefined> => {
    try {
      const res = await productApi.getProductsByCategoryId({
        categoryId: categoryId,
        Price: '1-10000',
      });

      if (res) {
        return res;
      }
    } catch (error: any) {
      showErrorMessage(
        `Đã xảy ra lỗi ${
          error?.error
            ? error?.error
            : error?.message
            ? error?.message
            : 'vui lòng thử lại sau'
        }`
      );

      throw error;
    }
  },
};

export default productService;
