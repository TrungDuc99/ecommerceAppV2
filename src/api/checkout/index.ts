import Toast from 'react-native-toast-message';

import axiosClient from '../common/axios-client';

const checkoutApi = {
  checkout: (): Promise<any> => {
    return axiosClient.post('/checkout/confirm');
  },
};

const checkoutService = {
  checkout: async (): Promise<any> => {
    try {
      const res = await checkoutApi.checkout();
      if (res) {
        return res;
      }
    } catch (error: any) {
      Toast.show({
        type: 'error',
        text1: 'Thất bại',
        text2: `Đã xảy ra lỗi, không thể đăng nhập ${
          error ? error : 'vui lòng thử lại sau'
        } 👋`,
      });

      throw error;
    }
  },
};

export default checkoutService;
