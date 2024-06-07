import { SecurityTime } from 'iconsax-react-native';
import React from 'react';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/ui';
import { BoxTag } from '@/ui/icons/box';
import { Phone } from '@/ui/icons/phone';
import { VatIcon } from '@/ui/icons/vat';

const InfoProduct = () => {
  return (
    <View style={styles.container}>
      <Text variant="sm" className="mb-2 font-medium">
        Thông tin sàn phẩm
      </Text>
      <View className="mb-2 mr-2 flex flex-row ">
        <Phone />

        <Text
          ellipsizeMode="tail"
          variant="xs"
          className="ml-2 mr-4 text-[#4a4a4a]"
        >
          Máy mới 100% , chính hãng Apple Việt Nam.CellphoneS hiện là đại lý bán
          lẻ uỷ quyền iPhone chính hãng VN/A của Apple Việt Nam
        </Text>
      </View>
      <View className="mb-2 mr-2 flex-row">
        <BoxTag />

        <Text
          ellipsizeMode="tail"
          variant="xs"
          className="ml-2 mr-3 text-[#4a4a4a]"
        >
          Hộp, Sách hướng dẫn, Cây lấy sim, Cáp Lightning - Type C
        </Text>
      </View>
      <View className=" flex-row">
        <SecurityTime color="#AAAAAA" />

        <Text variant="xs" className="ml-1 mr-4 text-[#4a4a4a]">
          1 ĐỔI 1 trong 30 ngày nếu có lỗi phần cứng nhà sản xuất. Bảo hành 12
          tháng tại trung tâm bảo hành chính hãng Apple : Điện Thoại Vui ASP
          (Apple Authorized Service Provider)
        </Text>
      </View>
      <View className="mb-4  flex-row items-center">
        <VatIcon />
        <Text variant="xs" className=" mr-4 text-[#4a4a4a]">
          Giá sản phẩm đã bao gồm VAT
        </Text>
      </View>
    </View>
  );
};

export default InfoProduct;

const styles = StyleSheet.create({
  container: {
    borderColor: '#E5E7EB',
    borderWidth: 1,
    padding: 10,

    marginVertical: 20,
    borderRadius: 10,
    backgroundColor: '#fff',
  },
});
