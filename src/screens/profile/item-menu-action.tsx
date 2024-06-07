import * as React from 'react';
import { StyleSheet } from 'react-native';

import { Text, TouchableOpacity, View } from '@/ui';
import colors from '@/ui/theme/colors';

interface ItemMenuActionProps {
  item: {
    id: string;
    icon: any;
    title: string;
  };
  onPress: () => void;
}

const ItemMenuAction = ({ item, onPress }: ItemMenuActionProps) => {
  const { id, icon, title } = item;
  const IconMenu = icon;

  return (
    <TouchableOpacity
      key={id}
      onPress={() => {
        onPress && onPress();
      }}
    >
      <View style={styles.container}>
        <IconMenu size={28} color={colors.neutral[600]} />
        <Text className="mt-2 text-center  text-[10px] font-medium leading-3 text-[#4d4d4d]">
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

export default ItemMenuAction;

const styles = StyleSheet.create({
  container: {
    width: 60,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
});
