import React from 'react';
import { Text, View } from 'react-native';

import categoryService from '@/api/category';

const Category = () => {
  const [category, setCategory] = React.useState<any>();

  const getAllCategory = () => {
    categoryService
      .getAll()
      .then((res: any) => {
        setCategory(res.Categories);
      })
      .catch(() => {});
  };
  React.useEffect(() => {
    getAllCategory();
  }, []);

  return (
    <View>
      <Text>Category</Text>
    </View>
  );
};

export default Category;
