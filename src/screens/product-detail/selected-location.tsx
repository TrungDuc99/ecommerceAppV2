import * as React from 'react';
import { useForm } from 'react-hook-form';
import { StyleSheet } from 'react-native';

import { Text, View } from '@/ui';

interface SelectedLocationProps {}

const SelectedLocation = (props: SelectedLocationProps) => {
  const { control } = useForm<any>({});
  return (
    <View style={styles.container}>
      <View className="" style={styles.item}>
        <Text variant="sm" className="text-center">
          Hồ Chí Minh
        </Text>
      </View>
      <View style={styles.item}>
        <Text variant="sm" className="text-center">
          Quận/Huyện
        </Text>
      </View>
    </View>
  );
};

export default SelectedLocation;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'row',
  },
  item: {
    display: 'flex',
    alignItems: 'center',
    width: '48%',
    height: 32,
    padding: 5,
    borderColor: '#E5E7EB',
    borderWidth: 1,
    borderRadius: 10,
    marginRight: 10,
  },
});
