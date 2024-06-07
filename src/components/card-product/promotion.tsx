import * as React from 'react';
import { StyleSheet, View } from 'react-native';

import { ScaleSize, Spacing } from '@/configs';
import { Text } from '@/ui';

interface PromotionProps {
  description: string;
}

const Promotion = ({ description }: PromotionProps) => {
  return (
    <View style={styles.container}>
      <Text variant="xs" className="text-[10px]" style={styles.text}>
        {description}
      </Text>
    </View>
  );
};

export default Promotion;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    marginVertical: Spacing(2),
    borderWidth: 0.5,
    borderColor: '#E5E7EB',
    backgroundColor: '#F3F4F6',
    borderRadius: 5,
    padding: 5,
  },
  text: {
    color: '#5d5d5d',
    lineHeight: ScaleSize(16),
  },
});
