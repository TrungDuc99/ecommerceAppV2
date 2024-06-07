import * as React from 'react';
import { ScrollView, StyleSheet, TouchableOpacity } from 'react-native';

import { Spacing } from '@/configs';
import { Text, View } from '@/ui';

type button = {
  id: string;
  title: string;
};

interface BrandsBtnProps {
  buttons: button[];
}

const ButtonsBase = ({ buttons }: BrandsBtnProps) => {
  return (
    <View style={styles.container}>
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row">
          {buttons.map((btn) => {
            return (
              <TouchableOpacity key={btn.id} onPress={() => {}}>
                <View style={styles.item}>
                  <Text variant="sm" style={styles.titleText}>
                    {btn.title}
                  </Text>
                </View>
              </TouchableOpacity>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default ButtonsBase;

const styles = StyleSheet.create({
  container: {},
  titleText: {
    textAlign: 'center',
  },
  title: {},
  item: {
    marginRight: Spacing(3),
    padding: Spacing(2),
    minWidth: 50,
    borderColor: '#E8E9ED',
    borderWidth: 1,
    borderRadius: 10,
  },
});
