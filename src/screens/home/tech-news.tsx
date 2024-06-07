import * as React from 'react';
import { StyleSheet } from 'react-native';

import CardBase from '@/components/card-base';
import HeaderList from '@/components/header-list';
import { TECH_NEWS } from '@/constants/multiple';
import { ScrollView, View } from '@/ui';

const TechNews = () => {
  return (
    <View className="mx-2" style={styles.container}>
      <HeaderList title="TIN CÔNG NGHỆ" />
      <View className="my-1" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="flex flex-row">
          {TECH_NEWS.map((item) => {
            return (
              <View key={item.id} className="mb-4 mr-2 mt-2">
                <CardBase item={item} onPress={() => {}} />
              </View>
            );
          })}
        </View>
      </ScrollView>
    </View>
  );
};

export default TechNews;

const styles = StyleSheet.create({
  container: {},
});
