import * as React from 'react';

import { ScaleSize } from '@/configs';
import { Image, View, WIDTH } from '@/ui';

const StandBanner = () => {
  return (
    <View className="mt-2 items-center">
      <Image
        style={{
          borderRadius: 10,
          width: WIDTH - 15,
          height: ScaleSize(70),
        }}
        contentFit="cover"
        source={{
          uri: 'https://cdn2.cellphones.com.vn/800x150,webp,q100/https://dashboard.cellphones.com.vn/storage/xa-kho-khet-special-mobile.png',
        }}
      />
    </View>
  );
};

export default StandBanner;
