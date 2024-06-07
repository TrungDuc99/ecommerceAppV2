/* eslint-disable max-lines-per-function */

import { ShoppingCart } from 'iconsax-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import { useDispatch } from 'react-redux';

import type { Product } from '@/api/product/types';
import { addToCart } from '@/feature/cart/cartSlice';
import { colors, Image, Text, TouchableOpacity, View } from '@/ui';
import ButtonBase from '@/ui/core/button-base';
import ButtonLinear from '@/ui/core/button-linear';
import { Triangle } from '@/ui/icons/triangle';

type CheckoutProps = {
  data: Product;
};

const Checkout = ({ data }: CheckoutProps) => {
  const [typeCheckout, setTypeCheckout] = React.useState(2);

  const dispatch = useDispatch();
  return (
    <View style={styles.container}>
      <View className="mx-2 my-5 flex flex-row justify-between rounded-lg bg-neutral-200 p-1">
        <TouchableOpacity
          onPress={() => setTypeCheckout(1)}
          className=" mr-2 flex w-1/2 flex-row items-center justify-center rounded-lg p-1"
          style={{
            backgroundColor: typeCheckout === 1 ? 'white' : colors.neutral[200],
            borderWidth: 1,
            borderColor:
              typeCheckout === 1 ? colors.primary[500] : colors.neutral[200],
          }}
        >
          {typeCheckout === 1 && (
            <View
              style={{
                position: 'absolute',
                bottom: -14,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Triangle />
            </View>
          )}

          <Image
            source={{
              uri: 'https://cdn2.cellphones.com.vn/x35,webp/media/icon/pdp-trade-icon.png',
            }}
            style={{ height: 30, width: 30 }}
          />
          <View className="ml-2">
            <Text className="font-bold">24.790.00</Text>
            <Text variant="xs">khi thu cũ lên đời</Text>
          </View>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => {
            setTypeCheckout(2);
          }}
          className="flex flex-1 items-center justify-center rounded-md"
          style={{
            backgroundColor: typeCheckout === 2 ? 'white' : colors.neutral[200],
            borderWidth: 1,
            borderColor:
              typeCheckout === 2 ? colors.primary[500] : colors.neutral[200],
          }}
        >
          {typeCheckout === 2 && (
            <View
              style={{
                position: 'absolute',
                bottom: -14,
                display: 'flex',
                justifyContent: 'center',
              }}
            >
              <Triangle />
            </View>
          )}
          <Text
            className="font-bold"
            style={{
              color: typeCheckout === 2 ? colors.primary[500] : 'black',
            }}
          >
            26.790.000
          </Text>
          <Text variant="xs" className="line-through">
            27.790.000
          </Text>
        </TouchableOpacity>
      </View>
      <View className=" flex-row items-center">
        <View className=" w-4/5  ">
          <ButtonLinear
            onPress={() => {}}
            borderRadius="medium"
            size="large"
            textLabel={
              <View>
                <Text className="text-center font-bold text-white">
                  MUA NGAY
                </Text>
                <Text
                  className="text-center text-[11px] text-white"
                  variant="xs"
                >
                  {'(Giao hàng thừ 2 giờ hoặc nhận tại cửa hàng)'}
                </Text>
              </View>
            }
          />
        </View>
        <TouchableOpacity
          onPress={async () => {
            // dispatch(
            //   addNewCart({
            //     productId: String(data.Id),
            //     quantity: 1,
            //     shoppingCartTypeId: 1,
            //   })
            // ).unwrap();
            // dispatch(fetchCart());
            dispatch(
              addToCart({
                ProductId: data.Id,
                ProductName: data.Name,
                ProductSeName: data.SeName,
                Quantity: 1,
                UnitPrice: data.ProductPrice.Price,
                UnitPriceValue: data.ProductPrice.PriceValue,
                AttributeInfo: 'string',
                Picture: data?.PictureModels,
                Id: data.Id,
                CustomProperties: data.CustomProperties,
              })
            );
          }}
          style={{
            height: 60,
            borderColor: colors.primary[500],
          }}
          className="ml-3 flex  flex-1 items-center justify-center rounded-md border-2 "
        >
          <ShoppingCart color={colors.primary[500]} />
          <Text className=" text-[8px] leading-3 text-primary-100">
            Thêm vào giỏ
          </Text>
        </TouchableOpacity>
      </View>

      {/* {'hinh thức mua'} */}
      <View className="flex flex-row justify-between">
        <View>
          <ButtonLinear
            color={['#3B79D0', '#287CE9']}
            borderRadius="medium"
            size="large"
            textLabel={
              <View>
                <Text className="text-center font-bold text-white">
                  TRẢ GÓP 0%
                </Text>
                <Text
                  className="text-center text-[11px] text-white"
                  variant="xs"
                >
                  {'(Trả trước chỉ từ 2.999.000đ)'}
                </Text>
              </View>
            }
          />
        </View>
        <View>
          <ButtonLinear
            borderRadius="medium"
            size="large"
            color={['#3B79D0', '#287CE9']}
            textLabel={
              <View>
                <Text className="text-center font-bold text-white">
                  TRẢ GÓP QUA THẺ
                </Text>
                <Text
                  className="text-center text-[11px] text-white"
                  variant="xs"
                >
                  {'(Visa, Mastercard, JCB)'}
                </Text>
              </View>
            }
          />
        </View>
      </View>
      <ButtonBase
        borderRadius="medium"
        size="small"
        style={{
          backgroundColor: '#EC8105',
        }}
        label="Tìm hiểu thêm"
      />
    </View>
  );
};

export default Checkout;

const styles = StyleSheet.create({
  container: {},
});
