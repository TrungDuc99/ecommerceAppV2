/* eslint-disable max-lines-per-function */

import { Star1 } from 'iconsax-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import YoutubePlayer from 'react-native-youtube-iframe';

import type { PictureModel } from '@/api/product/types';
import { ScaleSize, Spacing } from '@/configs';
import { PRODUCT_DETAIL } from '@/constants';
import { Image, ScrollView, Text, TouchableOpacity, View } from '@/ui';
import { ViewLinear } from '@/ui/core/view-linear-gradient';
type ProductImage = {
  Images: PictureModel;
};
const ProductImage = ({ Images }: any) => {
  const [activeSlide, setActiveSlide] = React.useState<number>(2);
  const carouselRef = React.useRef<any>(null);

  const renderItem = ({ item, index }: any) => {
    const { type, data, url } = item;
    return (
      <View key={index} style={styles.carouselContainer}>
        {type === 'image' ? (
          <View
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <Image
              contentFit="contain"
              style={styles.image}
              source={{ uri: Images?.[0]?.FullSizeImageUrl }}
            />
          </View>
        ) : type === 'video' ? (
          <View>
            <YoutubePlayer height={ScaleSize(210)} play={true} videoId={url} />
          </View>
        ) : (
          <ViewLinear
            start={{ x: 0, y: 0 }}
            end={{ x: 1, y: 0 }}
            className="flex flex-1 flex-row items-center rounded-md"
            colors={['#DD5F89', '#e7807e', '#F7BA97']}
          >
            <Image
              contentFit="contain"
              style={styles.featureImage}
              source={{ uri: url }}
            />

            <ScrollView style={{ flex: 1 }}>
              <Text variant="md" className="mt-2 font-semibold text-white">
                TÍNH NĂNG NỔI BẬT
              </Text>
              {data.map((item: string, index: number) => {
                return (
                  <View key={index}>
                    <Text
                      ellipsizeMode="tail"
                      variant="xs"
                      className="text-[12px] text-white"
                    >
                      - {item}
                    </Text>
                  </View>
                );
              })}
            </ScrollView>
          </ViewLinear>
        )}
      </View>
    );
  };
  React.useEffect(() => {
    if (carouselRef.current) {
      carouselRef.current?.snapToItem(activeSlide);
    }
  }, [activeSlide]);
  const handleSnapToItem = (index: number) => {
    setActiveSlide(index);
  };

  return (
    <View className=" " style={styles.container}>
      <Carousel
        ref={carouselRef}
        sliderWidth={400}
        itemWidth={400}
        loop
        autoplay={false}
        autoplayInterval={4000}
        data={PRODUCT_DETAIL.imagesDetail}
        renderItem={renderItem}
        onSnapToItem={handleSnapToItem}
      />

      <View className="  mx-3 flex  flex-row">
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {PRODUCT_DETAIL.imagesDetail.map((item, index: number) => {
            const indexCurrenBor = activeSlide === index ? true : false;
            const { type } = item;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => setActiveSlide(index)}
              >
                <View
                  style={[
                    styles.pageContainer,
                    {
                      borderColor: indexCurrenBor ? 'red' : '#D2D5DB',
                    },
                  ]}
                >
                  {type === 'image' ? (
                    <Image
                      contentFit="cover"
                      style={{
                        borderRadius: 10,
                        width: ScaleSize(43),
                        height: ScaleSize(43),
                      }}
                      source={{
                        uri: item.url,
                      }}
                    />
                  ) : type === 'text' ? (
                    <View className="flex items-center ">
                      <Star1 size="20" color="#D2D5DB" />
                      <Text
                        variant="xs"
                        style={{
                          lineHeight: 10,
                        }}
                        className="text-center text-[8px]"
                      >
                        {'Tính năng \nnổi bật'}
                      </Text>
                    </View>
                  ) : (
                    <Text variant="xs" className="text-center text-[8px]">
                      Video
                    </Text>
                  )}
                </View>
              </TouchableOpacity>
            );
          })}
        </ScrollView>
      </View>
    </View>
  );
};

export default ProductImage;

const styles = StyleSheet.create({
  container: {},
  carouselContainer: {
    justifyContent: 'center',
    height: ScaleSize(230),
    width: '93%',
    display: 'flex',
    borderColor: '#D2D5DB',
    borderWidth: 1,
    borderRadius: 10,
    marginVertical: 10,
    marginHorizontal: 10,
  },
  image: {
    borderRadius: 10,
    width: ScaleSize(200),
    height: ScaleSize(200),
  },
  featureImage: {
    borderRadius: 10,
    backgroundColor: 'white',
    width: ScaleSize(160),
    marginLeft: 5,
    height: ScaleSize(170),
    marginRight: 10,
  },
  pageContainer: {
    width: ScaleSize(45),
    height: ScaleSize(45),
    marginRight: Spacing(2),
    borderRadius: 5,
    justifyContent: 'center',
    alignContent: 'center',
    borderWidth: 1,
  },
});
