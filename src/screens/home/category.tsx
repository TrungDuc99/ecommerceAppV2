import * as React from 'react';
import { StyleSheet } from 'react-native';

import CardBase from '@/components/card-category';
import HeaderList from '@/components/header-list';
import { CATEGORY1, CATEGORY2 } from '@/constants/category';
import { ScrollView, View } from '@/ui';

export type categoryType = {
  id: string;
  title: string;
  image: any;
};

const Category = () => {
  // const [category, setCategory] = React.useState<any>();

  // const getAllCategory = () => {
  //   categoryService
  //     .getAll()
  //     .then((res: any) => {
  //       setCategory(res.Categories);
  //     })
  //     .catch(() => {});
  // };
  // React.useEffect(() => {
  //   getAllCategory();
  // }, []);

  return (
    <View style={styles.container}>
      <View className="mt-2" />
      <HeaderList title="DANH MỤC" titleViewDetail="" />
      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        <View className="my-2 ml-1">
          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {CATEGORY1?.map((item: any) => (
              <CardBase key={item.id} item={item} onPress={() => {}} />
            ))}
          </View>

          <View style={{ display: 'flex', flexDirection: 'row' }}>
            {CATEGORY2.map((item) => (
              <CardBase key={item.id} item={item} onPress={() => {}} />
            ))}
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },

  title: {},
  item: {},
  image: {
    width: 20,
    height: 20,
    borderRadius: 10,
    marginRight: 10,
  },
});
