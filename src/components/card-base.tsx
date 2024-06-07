import * as React from 'react';
import { StyleSheet } from 'react-native';
import { Card } from 'react-native-ui-lib';

import { ScaleSize, Spacing } from '@/configs';
import { Image, Text, View } from '@/ui';

interface CardBaseProps {
  item: {
    id: number;
    title: string;
    decription: string;
    image: string;
    url: string;
  };
  onPress: (item: any) => void;
}

const CardBase = ({ item, onPress }: CardBaseProps) => {
  return (
    <Card
      onPress={() => {
        onPress && onPress(item);
      }}
    >
      <View style={styles.container}>
        <Image
          contentFit="contain"
          source={item.image}
          style={{
            width: '100%',
            height: ScaleSize(100),
            borderTopLeftRadius: 10,
            borderTopRightRadius: 10,
          }}
        />
        <Text
          className="my-2 px-2 font-semibold "
          numberOfLines={2}
          variant="xs"
        >
          {item.decription}
        </Text>
      </View>
    </Card>
  );
};

export default CardBase;

const styles = StyleSheet.create({
  container: {
    padding: Spacing(1.5),
    paddingBottom: Spacing(2),
    borderRadius: 10,
    display: 'flex',
    width: ScaleSize(180),
    justifyContent: 'center',
    alignItems: 'center',
  },
});
