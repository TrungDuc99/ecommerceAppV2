import React, { useState } from 'react';
import { StyleSheet } from 'react-native';
import Carousel, { Pagination } from 'react-native-snap-carousel';

import { ScaleSize } from '@/configs';
import { ENTRIES1 } from '@/constants';
import { Image, View, WIDTH } from '@/ui';

const CarouselSlider = () => {
  const [activeSlide, setActiveSlide] = useState<number>(1);

  const renderItem = ({ item, index }: any) => {
    return (
      <View className="px-2" key={index}>
        <Image
          contentFit="cover"
          style={{
            borderRadius: 10,
            width: WIDTH - 15,
            height: ScaleSize(170),
          }}
          source={{ uri: item.illustration || '' }}
        />
      </View>
    );
  };
  return (
    <View className=" " style={styles.container}>
      <Carousel
        sliderWidth={400}
        itemWidth={400}
        loop
        autoplay={true}
        autoplayInterval={4000}
        data={ENTRIES1}
        renderItem={renderItem}
        onSnapToItem={(index) => setActiveSlide(index)}
      />
      <View>
        <Pagination
          containerStyle={styles.paginationContainer}
          dotsLength={ENTRIES1.length}
          activeDotIndex={activeSlide}
          dotStyle={{
            width: 10,
            height: 10,

            borderRadius: 5,
            backgroundColor: '#707070',
          }}
          inactiveDotStyle={
            {
              // Define styles for inactive dots here
            }
          }
          inactiveDotOpacity={0.4}
          inactiveDotScale={0.6}
        />
      </View>
    </View>
  );
};

export default CarouselSlider;

const styles = StyleSheet.create({
  container: {},
  paginationContainer: {
    paddingVertical: ScaleSize(5), // Set your desired padding here
  },
  paginationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    marginHorizontal: 8,
    backgroundColor: 'rgba(255, 255, 255, 0.92)',
  },
});
