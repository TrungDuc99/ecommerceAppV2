/* eslint-disable max-lines-per-function */

import { AddCircle, Heart, MinusCirlce } from 'iconsax-react-native';
import Lottie from 'lottie-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';
import type { RootState } from 'store';

import type { Product } from '@/api/product/types';
import { ScaleSize, Spacing } from '@/configs';
import {
  addToCart,
  removeFromCart,
  selectCartItemsWithId,
} from '@/feature/cart/cartSlice';
import { colors, Image, Text, TouchableOpacity, View } from '@/ui';

import Promotion from './promotion';
import Rating from './rating';

interface ProductCardProps {
  item: Product;
  width?: number;
  isShowPromotion?: boolean;
  typeProduct?:
    | 'phone'
    | 'laptop'
    | 'tablet'
    | 'pc'
    | 'sounds'
    | 'watch'
    | 'smarthome'
    | 'tv';
  onPress: (item: Product) => void;
}

const ProductCard = ({
  item,
  width = 200,
  typeProduct = 'phone',
  isShowPromotion = true,
  onPress,
}: ProductCardProps) => {
  const { id, productName, tradePrice, promotion, rating, cost, price, image } =
    item;
  console.log('====================================');
  console.log(item);
  console.log('====================================');
  const styles = StyleSheet.create({
    card: {
      width: ScaleSize(width ? width : typeProduct === 'phone' ? 200 : 220),
      marginVertical: Spacing(4),
    },
    containter: {
      padding: Spacing(2),
    },
    footerCard: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
  });
  const [liked, setLiked] = React.useState<number>(0);
  const dispatch = useDispatch();
  const items = useSelector((state: RootState) =>
    selectCartItemsWithId(state, id)
  );

  React.useEffect(() => {
    if (liked === 2) {
      const timer = setTimeout(() => {
        setLiked(1);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [liked]);

  return (
    <Card
      key={id}
      activeOpacity={0.5}
      // onPress={() => {
      //   onPress && onPress(item);
      // }}
      style={styles.card}
    >
      <View style={styles.containter}>
        <TouchableOpacity
          className="py-1"
          onPress={() => {
            onPress && onPress(item);
          }}
        >
          <Image
            contentFit="contain"
            source={{ uri: image }}
            style={{ width: '100%', height: 200, marginVertical: Spacing(1) }}
          />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            onPress && onPress(item);
          }}
        >
          <Text variant="xs" className="text-left font-semibold">
            {productName || ''}
          </Text>
        </TouchableOpacity>
        <View
          className="my-3 flex flex-row"
          style={{
            flexDirection: width <= 150 ? 'column' : 'row',
          }}
        >
          <Text variant="xs" className=" mr-2  font-semibold text-red-600">
            {price}
          </Text>
          <Text
            variant="xs"
            style={{ textDecorationLine: 'line-through' }}
            className=" align-text-bottom text-[10px] font-semibold text-neutral-600"
          >
            {cost}đ
          </Text>
        </View>
        <View className="flex flex-row">
          <Text
            variant="xs"
            className=" align-text-bottom text-[10px] font-medium  text-neutral-600"
          >
            Giá lên đời:{' '}
          </Text>
          <Text
            variant="xs"
            className=" text-center font-semibold text-red-600"
          >
            {tradePrice}đ
          </Text>
        </View>
        {isShowPromotion && promotion && <Promotion description={promotion} />}

        <Rating rating={rating} maxRating={5} />
        <View style={styles.footerCard}>
          <View className="flex flex-row items-center justify-between">
            <TouchableOpacity
              disabled={items?.Quantity > 0 ? false : true}
              onPress={() => {
                dispatch(removeFromCart({ id: id }));
              }}
            >
              <MinusCirlce
                color={items?.Quantity > 0 ? '#007AFF' : '#637b94'}
                variant="Bulk"
              />
            </TouchableOpacity>
            <Text variant="xs" className="mx-2 font-bold ">
              {items?.Quantity || 0}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(
                  addToCart({
                    ProductId: id,
                    ProductName: productName,
                    ProductSeName: productName,
                    Quantity: 1,
                    UnitPrice: price,
                    UnitPriceValue: 1,
                    AttributeInfo: 'string',
                    Picture: image,
                    Id: id,
                    CustomProperties: 'CustomProperties',
                  })
                );
              }}
            >
              <AddCircle color="#007AFF" variant="Bulk" />
            </TouchableOpacity>
          </View>
          <View className="flex flex-row items-center justify-center">
            <Text variant="xs" className="mr-1 text-neutral-600 ">
              Yêu thích
            </Text>
            <TouchableOpacity
              activeOpacity={0.5}
              style={{
                height: ScaleSize(50),
                width: ScaleSize(40),
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
              }}
              onPress={() => {
                if (liked === 0) {
                  setLiked(2);
                } else if (liked === 1) {
                  setLiked(0);
                }
              }}
            >
              {liked === 2 ? (
                <View style={{}}>
                  <Lottie
                    style={{ height: ScaleSize(50) }}
                    source={require('@/assets/animtions/heart-pressed.json')}
                    autoPlay
                    loop
                  />
                </View>
              ) : (
                <Heart
                  size="25"
                  variant={liked === 1 ? 'Bold' : 'Outline'}
                  color={colors.primary[500]}
                />
              )}
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Card>
  );
};

export default ProductCard;

/* eslint-enable max-lines-per-function */
