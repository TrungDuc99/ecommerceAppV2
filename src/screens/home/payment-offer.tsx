import * as React from 'react';
import { StyleSheet } from 'react-native';

import HeaderList from '@/components/header-list';
import { ScaleSize, Spacing } from '@/configs';
import { PAYMENT_OFFER_URL } from '@/constants/multiple';
import { Image, View } from '@/ui';

const PaymentOffer = () => {
  const paymentOffers = PAYMENT_OFFER_URL.map((item, index) => (
    <Image
      key={item.id}
      source={item.image}
      contentFit="cover"
      style={{
        marginRight: index % 2 === 0 ? Spacing(3.5) : 0,
        marginBottom: index % 2 ? 0 : Spacing(3.5),
        borderRadius: 10,
        width: '48%',
        height: ScaleSize(80),
      }}
    />
  ));
  return (
    <View style={styles.container}>
      <View className="mt-2" />
      <HeaderList title="ƯU ĐÃI THANH TOÁN" titleViewDetail="" />
      <View className="my-2" />
      <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
        {paymentOffers}
      </View>
    </View>
  );
};

export default PaymentOffer;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {},
  item: {},
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});
