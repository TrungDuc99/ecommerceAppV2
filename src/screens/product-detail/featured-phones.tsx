import { FlashList } from '@shopify/flash-list';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import productService from '@/api/product';
import ProductCard from '@/components/card-product';
import { View } from '@/ui';
type Props = {
  navigation: any;
};

const FeaturedPhones = ({ navigation }: Props) => {
  const [product, setProduct] = React.useState<any>();

  const getAllCategory = () => {
    productService
      .getProductByCategoryId(7)
      .then((res) => {
        setProduct(res?.Products);
      })
      .catch(() => {});
  };
  React.useEffect(() => {
    getAllCategory();
  }, []);

  const renderItem = ({ item, index }: any) => {
    return (
      <View className="px-2" key={index}>
        <ProductCard
          item={item}
          width={150}
          isShowPromotion={false}
          onPress={() => {
            navigation('ProductDetail', { item });
          }}
        />
      </View>
    );
  };

  return (
    <View className="" style={styles.container}>
      <FlashList
        showsHorizontalScrollIndicator={false}
        data={product}
        horizontal
        renderItem={renderItem}
      />
    </View>
  );
};

export default FeaturedPhones;

const styles = StyleSheet.create({
  container: {},
});
