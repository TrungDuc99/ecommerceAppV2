/* eslint-disable max-lines-per-function */

import { styled } from 'nativewind';
import * as React from 'react';
import type { TextInput, TextInputProps } from 'react-native';
import { Platform } from 'react-native';
import { StyleSheet } from 'react-native';
import { TextInput as NTextInput } from 'react-native';

import { isRTL } from '@/core';

import colors from '../../theme/colors';
import { ActivityIndicator } from '../activity-indicator';
import { Text } from '../text';
import { TouchableOpacity } from '../touchable-opacity';
import { View } from '../view';

const STextInput = styled(NTextInput);

export interface NInputProps extends TextInputProps {
  label?: string;
  disabled?: boolean;
  error?: string;
  required?: boolean;
  size?: 'small' | 'medium' | 'large';
  labelButtonRight?: string;
  onPressButtonRight?: () => void;
  iconLeft?: {
    name: any;
    color?: string;
    custom?: boolean;
    size?: number;
    onPress?: () => void;
  };
  iconRight?: {
    name: any;
    color?: string;
    size?: number;
    onPress?: () => void;
  };
}

export const Input = React.forwardRef<TextInput, NInputProps>((props, ref) => {
  const {
    label,
    error,
    required = false,
    iconLeft,
    iconRight,
    labelButtonRight,
    onPressButtonRight,
    size = 'medium',
    ...inputProps
  } = props;
  const IconLeft = iconLeft?.name;
  const IconRight = iconRight?.name;
  const [isFocussed, setIsFocussed] = React.useState(false);
  const onBlur = React.useCallback(() => setIsFocussed(false), []);
  const onFocus = React.useCallback(() => setIsFocussed(true), []);

  // const borderColor = error
  //   ? 'border-danger-600'
  //   : isFocussed
  //   ? 'border-primary-700'
  //   : 'border-primary-400';
  const marginVertical = Platform.OS === 'ios' ? 'py-3' : 'py-2';

  // const bgColor = error ? 'bg-danger-50' : 'bg-neutral-200'; => ${bgColor}
  const textDirection = isRTL ? 'text-right' : 'text-left';
  return (
    <View className="mb-3">
      {label && (
        <Text
          variant="sm"
          className={`mb-2 font-medium ${
            error ? 'text-danger-600' : 'text-#112950'
          } `}
        >
          {label} {required && <Text className="text-danger-600 ">*</Text>}
        </Text>
      )}

      <View
        style={[
          {
            height: size === 'small' ? 50 : size === 'large' ? 60 : 55,
          },
          error
            ? isFocussed
              ? {
                  backgroundColor: 'white',
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 1,
                  },
                  shadowOpacity: 0.22,
                  shadowRadius: 2.22,

                  elevation: 3,
                }
              : {
                  borderWidth: 0.7,
                  borderColor: colors.danger[600],
                  backgroundColor: '#f5f5f5',
                }
            : isFocussed
            ? {
                backgroundColor: 'white',
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 1,
                },
                shadowOpacity: 0.22,
                shadowRadius: 2.22,

                elevation: 3,
              }
            : {
                borderWidth: 0.7,
                borderColor: colors.neutral[300],
                backgroundColor: '#f5f5f5',
              },
        ]}
        className={`w-full flex-row 
        ${labelButtonRight ? 'pl-4 pr-2' : 'px-4'} 
        content-center 
        items-center 
        justify-center 
        rounded-2xl
          ${textDirection}
           `}
      >
        {IconLeft && (
          <TouchableOpacity
            style={
              iconLeft.custom
                ? {
                    backgroundColor: colors.primary[500],
                    padding: 7,
                    borderRadius: 10,
                  }
                : {}
            }
            onPress={iconLeft.onPress && iconLeft.onPress}
          >
            <IconLeft
              size={20}
              color={
                iconLeft.color
                  ? iconLeft.color
                  : isFocussed
                  ? colors.primary[500]
                  : '#8894A7'
              }
            />
          </TouchableOpacity>
        )}

        <STextInput
          testID="STextInput"
          ref={ref}
          placeholderTextColor={'#8f8f8f'}
          className={`ml-1 mt-0 ${marginVertical} flex-1 rounded-md px-2 text-[16px] ${textDirection}`}
          onBlur={onBlur}
          onFocus={onFocus}
          {...inputProps}
          style={StyleSheet.flatten([
            { writingDirection: isRTL ? 'rtl' : 'ltr' },
          ])}
        />
        {labelButtonRight && (
          <TouchableOpacity
            onPress={onPressButtonRight}
            className={`flex-row items-center justify-center rounded-lg bg-primary-700  p-2
         `}
          >
            {false ? (
              <ActivityIndicator />
            ) : (
              <View className="flex-row">
                <Text className="text-[12px] font-semibold text-white">
                  {labelButtonRight}
                </Text>
              </View>
            )}
          </TouchableOpacity>
        )}

        {IconRight && !labelButtonRight && (
          <TouchableOpacity onPress={iconRight.onPress && iconRight.onPress}>
            <IconRight
              color={
                iconRight.color
                  ? iconRight.color
                  : isFocussed
                  ? colors.primary[500]
                  : '#8894A7'
              }
              variant="Bulk"
              size={25}
            />
          </TouchableOpacity>
        )}
      </View>
      {error && <Text variant="error">{error}</Text>}
    </View>
  );
});
