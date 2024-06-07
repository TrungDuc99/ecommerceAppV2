import { ArrowRight2 } from 'iconsax-react-native';
import * as React from 'react';
import { StyleSheet } from 'react-native';

import type { textVariants } from '@/ui';
import { Text, TouchableOpacity, View } from '@/ui';
import colors from '@/ui/theme/colors';

interface HeaderListProps {
  variantTitle?: keyof typeof textVariants;
  isTextTransformTitles?: boolean;
  title: string;
  titleViewDetail?: string;
}

const HeaderList = ({
  title,
  variantTitle = 'lg',
  isTextTransformTitles = true,
  titleViewDetail = 'Xem tất cả',
}: HeaderListProps) => {
  const styles = StyleSheet.create({
    container: {
      display: 'flex',
      justifyContent: 'space-between',
      flexDirection: 'row',
      alignItems: 'flex-end',
    },
    title: {
      textTransform: isTextTransformTitles ? 'uppercase' : 'none',
    },
  });
  return (
    <View style={styles.container}>
      <Text
        variant={variantTitle}
        className="font-semibold text-neutral-700"
        style={styles.title}
      >
        {title}
      </Text>
      <TouchableOpacity className="flex flex-row items-center">
        <Text variant="sm" className="text-neutral-500">
          {titleViewDetail}
        </Text>
        <ArrowRight2 size={15} color={colors.neutral[500]} />
      </TouchableOpacity>
    </View>
  );
};

export default HeaderList;
