import { ArrowLeft2, ArrowRight2 } from 'iconsax-react-native';
import React, { useState } from 'react';
import Carousel from 'react-native-snap-carousel';

import { Text, View } from '@/ui';
type bannder = {
  titleFirst: string;
  titleLast: string;
  titleMain: string;
  subtitle: string;
};
const banners = [
  {
    // image: require('@/assets/images/banners/banner1.png'),
    titleFirst: 'Chính sách ',
    titleMain: 'Bảo hành - Đổi trả',
    titleLast: 'tốt nhất',
    subtitle: '',
  },
  {
    // image: require('@/assets/images/banners/banner2.png'),
    titleFirst: 'Sản phẩm',
    titleMain: 'Chính hãng - Xuất VAT',
    titleLast: 'đầy đủ',
    subtitle: '',
  },
  {
    // image: require('@/assets/images/banners/banner2.png'),
    titleFirst: '',
    titleMain: 'Giao nhanh - Miễn phí',
    titleLast: 'cho đơn từ 300k',
    subtitle: '',
  },
];

const BannerTop = () => {
  const [activeSlide, setActiveSlide] = useState<number>(0);
  const renderItem = (item: bannder, index: any) => {
    return (
      <View key={index} className=" flex items-center">
        <Text
          style={{ color: '#273074' }}
          className="  mr-[50] text-center text-[11px]  font-medium"
        >
          {item.titleFirst}{' '}
          <Text
            variant="md"
            style={{ color: '#273074' }}
            className="text-[15px] font-extrabold"
          >
            {item.titleMain}{' '}
          </Text>
          {item.titleLast}{' '}
        </Text>
      </View>
    );
  };

  return (
    <View className="flex  " style={{ backgroundColor: '#E9EFFF' }}>
      <View className="ios:pt-10 mb-1 mr-1 flex flex-row items-center justify-between ">
        {activeSlide !== 1 && <ArrowLeft2 size="25" color="#050E65" />}
        <Carousel
          sliderWidth={400}
          itemWidth={400}
          loop
          autoplay={true}
          autoplayInterval={4000}
          data={banners}
          renderItem={(item) => renderItem(item.item, item.index)}
          onSnapToItem={(index) => setActiveSlide(index + 1)}
        />
        {banners.length > Number(activeSlide) && (
          <ArrowRight2 size="25" color="#050E65" />
        )}
      </View>
    </View>
  );
};

export default BannerTop;
