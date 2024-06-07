import { useNavigation, useRoute } from '@react-navigation/native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import Rating from '@/components/card-product/rating';
import CartPopup from '@/components/popup-cart';
import { PRODUCT_DETAIL } from '@/constants';
import type { RouteProp } from '@/navigation/types';
import { ScrollView, Text, View } from '@/ui';

import Checkout from './checkout';
import ExtraOffer from './extra-offer';
import FeaturedPhones from './featured-phones';
import ProductImage from './image-product';
import InfoProduct from './info-product';
import Prices from './prices';
import SelectedLocation from './selected-location';
const ProductDetail = () => {
  const { params } = useRoute<RouteProp<'ProductDetail'>>();

  const { navigate } = useNavigation();

  return (
    <View style={styles.container}>
      <CartPopup />
      <ScrollView showsVerticalScrollIndicator={false}>
        <ProductImage Images={params.data.PictureModels} />
        <View className="mx-2">
          <Text className="my-3 font-bold">
            iPhone 14 Pro Max 128GB | Chính hãng VN/A
          </Text>

          <Rating rating={3} totalRating={18} />

          <Prices
            style={{ marginTop: 10 }}
            data={PRODUCT_DETAIL.prices}
            onChangePrice={() => {}}
          />
          <Text variant="sm" className="mt-3 font-bold">
            Chọn màu để xem giá và chi nhánh có hànge
          </Text>
          <Prices
            style={{ marginTop: 10 }}
            className=""
            data={PRODUCT_DETAIL.priceByColor}
            onChangePrice={() => {}}
          />
          <Checkout data={params.data} />
          <InfoProduct />
          <ExtraOffer />
          <SelectedLocation />
        </View>
        <FeaturedPhones navigation={navigate} />
      </ScrollView>
    </View>
  );
};

export default ProductDetail;

const styles = StyleSheet.create({
  container: {},
});
