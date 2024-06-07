/* eslint-disable max-lines-per-function */

import * as React from 'react';
import type { ViewProps } from 'react-native';
import { StyleSheet } from 'react-native';

import { ScaleSize, Spacing } from '@/configs';
import { Image, Text, TouchableOpacity, View } from '@/ui';
import { Stick } from '@/ui/icons/tick';
type Price = {
  id: number;
  title: string;
  image?: any;
  isStocking: boolean;
  price: number;
};
interface PricesProps extends ViewProps {
  data: Price[];

  onChangePrice: (price: Price) => void;
}

const Prices = ({ data, onChangePrice, ...props }: PricesProps) => {
  const [selectedPrice, setSelectedPrice] = React.useState<any>(1);
  const RenderPrices = data.map((item, index) => (
    <TouchableOpacity
      onPress={() => {
        onChangePrice && onChangePrice(item);
        setSelectedPrice(item.id);
      }}
      className=""
      activeOpacity={0.5}
      key={index}
      style={[
        styles.itemContainer,
        {
          marginRight: Spacing(1.2),
          marginBottom: index % 2 ? 0 : Spacing(2),
          borderWidth: 1,
          borderColor: selectedPrice === item?.id ? '#D70518' : '#D1D5DB',
        },
      ]}
    >
      {selectedPrice === item?.id && (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: 20,
            height: 11,
            backgroundColor: 'red',
            borderTopLeftRadius: 9,
            borderBottomEndRadius: 10,
            alignItems: 'center',
          }}
        >
          <Stick color="white" />
        </View>
      )}

      <View className="flex flex-row items-center justify-center">
        {item.image && (
          <Image
            source={item.image}
            style={{ width: 30, height: 30, marginRight: 10 }}
          />
        )}
        <View>
          <Text
            style={{ textAlign: item.image ? 'left' : 'center' }}
            variant="xs"
            className="android:font-bold font-semibold leading-6"
          >
            {item.title}
          </Text>
          <Text variant="xs">{item.price}</Text>
        </View>
      </View>
    </TouchableOpacity>
  ));
  return (
    <View {...props}>
      <View
        style={{
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {RenderPrices}
      </View>
    </View>
  );
};

export default Prices;

const styles = StyleSheet.create({
  container: {},
  itemContainer: {
    borderRadius: 10,
    height: ScaleSize(60),

    justifyContent: 'center',
    alignItems: 'center',
    width: '32%',
  },
});
