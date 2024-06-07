import { Star1 } from 'iconsax-react-native';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { log } from 'react-native-reanimated';

import { Text } from '@/ui';

type RatingProps = {
  rating?: number;
  maxRating?: number;
  totalRating?: number;
  onRatingChange?: (rating: number) => void;
};

const Rating = ({
  rating = 0,
  maxRating = 5,
  onRatingChange,
  totalRating,
}: RatingProps) => {
  const [currentRating, setCurrentRating] = useState(rating);
  log;
  const handleRatingPress = (newRating: number) => {
    if (onRatingChange) {
      onRatingChange(newRating);
    }
    setCurrentRating(newRating);
  };

  const getStarColor = (idx: number) => {
    if (currentRating >= idx && currentRating < idx + 0.5) {
      // if the rating is between idx and idx + 0.5, set color to Bulk
      return currentRating === 0.5 ? 'Bulk' : '#f59e0b';
    } else if (currentRating >= idx + 0.5) {
      return '#f59e0b';
    } else {
      return '#d1d5db';
    }
  };

  return (
    <View style={styles.container}>
      {[...Array(maxRating)].map((_, i) => {
        const starRating = i;
        return (
          <TouchableOpacity
            key={i}
            onPress={() => {
              onRatingChange && handleRatingPress(starRating);
            }}
          >
            <Star1 color={getStarColor(i)} size={15} variant="Bold" />
          </TouchableOpacity>
        );
      })}
      <Text className="ml-1  text-[10px] text-neutral-600" variant="xs">
        {totalRating} đánh giá
      </Text>
    </View>
  );
};

export default Rating;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
