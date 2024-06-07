import { showErrorMessage } from '@/ui';

import axiosClient from '../common/axios-client';
import type { CategoriesResponse } from './types';

const categoryApi = {
  getAll: (): Promise<any> => {
    return axiosClient.get('/category');
  },
};

const categoryService = {
  getAll: async (): Promise<CategoriesResponse | undefined> => {
    try {
      const res = await categoryApi.getAll();
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
};

export default categoryService;
