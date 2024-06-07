import * as React from 'react';
import { StyleSheet, View } from 'react-native';
import { Card } from 'react-native-ui-lib';

import { ScaleSize, Spacing } from '@/configs';
import { Image, Text, TouchableOpacity } from '@/ui';

interface CardCategoryProps {
  item: {
    id: any;
    title: string;
    Name?: string;
    image: any;
  };
  onPress: (item: any) => void;
}

const CardCategory = ({ item, onPress }: CardCategoryProps) => {
  const { title, id, image, Name } = item;
  return (
    <View key={id}>
      <Card style={styles.container}>
        <TouchableOpacity onPress={() => onPress(item)}>
          <Image contentFit="contain" source={image} style={styles.image} />
        </TouchableOpacity>
      </Card>
      <Text variant="xs" className="font-semibold" style={styles.title}>
        {title || Name}
      </Text>
    </View>
  );
};

export default CardCategory;

const styles = StyleSheet.create({
  container: {
    padding: 2,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: Spacing(3),
  },
  title: {
    marginVertical: 10,
    marginRight: 10,
    textAlign: 'center',
  },
  item: {},
  image: {
    backgroundColor: '#fff',
    borderRadius: 10,
    width: ScaleSize(75),
    height: ScaleSize(75),
  },
});
