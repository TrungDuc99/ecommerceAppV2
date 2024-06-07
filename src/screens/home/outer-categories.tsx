import * as React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

import HeaderList from '@/components/header-list';
import { ScaleSize, Spacing } from '@/configs';
import { ACCESSORIES1, ACCESSORIES2 } from '@/constants/multiple';
import { Image, ScrollView, Text, View } from '@/ui';

const OuterCategories = () => {
  const RenderAccessories = (data: any) => {
    return (
      <>
        {data.map((item: any) => (
          <TouchableOpacity
            key={item.id}
            style={[
              styles.item,
              {
                marginRight: Spacing(3),
              },
            ]}
          >
            <Text
              variant="xs"
              style={{
                lineHeight: ScaleSize(13),
              }}
              className="absolute left-1 top-1 text-[10px] font-semibold text-white"
            >
              {item.title}
            </Text>
            <Image
              className="h-[75] w-[65] rounded-lg"
              contentFit="cover"
              source={item.image}
            />
          </TouchableOpacity>
        ))}
      </>
    );
  };

  return (
    <View style={styles.container}>
      <View className="mt-2" />
      <HeaderList title="PHỤ KIỆN" titleViewDetail="" />
      <View className="my-2" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View>
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {RenderAccessories(ACCESSORIES1)}
          </View>
          <View className="my-2" />
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {RenderAccessories(ACCESSORIES2)}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default OuterCategories;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  item: {
    backgroundColor: 'rgb(242, 131, 118)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: ScaleSize(70),
    height: ScaleSize(80),
    borderRadius: 10,
  },
});
