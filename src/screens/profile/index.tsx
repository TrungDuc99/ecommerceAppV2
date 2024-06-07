/* eslint-disable max-lines-per-function */

import { useNavigation } from '@react-navigation/native';
import {
  ArrowLeft,
  ArrowRight,
  ClipboardText,
  Clock,
  Coin1,
  Gift,
  I24Support,
  Message,
  Personalcard,
  ReceiptDisscount,
  Setting2,
  Trade,
  Wanchain,
  Whatsapp,
  Zoom,
} from 'iconsax-react-native';
import LottieView from 'lottie-react-native';
import React, { useEffect, useState } from 'react';
import { ImageBackground, StyleSheet } from 'react-native';
import StepIndicator from 'react-native-step-indicator';
import { Card } from 'react-native-ui-lib';
import { useDispatch, useSelector } from 'react-redux';

import type { User } from '@/api/user/types';
import HeaderList from '@/components/header-list';
import { ScaleSize } from '@/configs';
import { useAuth } from '@/core';
import { fetchUser, selectUserInfo } from '@/feature/user/userSlice';
import { Image, ScrollView, Text, TouchableOpacity, View } from '@/ui';
import ButtonLinear from '@/ui/core/button-linear';
import colors from '@/ui/theme/colors';

import ItemMenuAction from './item-menu-action';

const menuActions = [
  {
    id: '0',
    title: 'Đã xem \ngần đây',
    icon: Clock,
    navigate: 'viewHistory',
  },
  {
    id: '1',
    title: 'Đánh giá \ncủa tôi',
    icon: Message,
    navigate: 'viewHistory',
  },
  {
    id: '2',
    title: 'evoucher \nđã mua',
    icon: ReceiptDisscount,
    navigate: 'viewHistory',
  },
  {
    id: '3',
    title: 'Thành viên',
    icon: Personalcard,
    navigate: 'viewHistory',
  },

  {
    id: '4',
    title: 'Try&Buy',
    icon: Wanchain,
    navigate: 'viewHistory',
  },
  {
    id: '5',
    title: 'Bán hàng',
    icon: Coin1,
    navigate: 'viewHistory',
  },
  {
    id: '6',
    title: 'My Appeal',
    icon: ClipboardText,
    navigate: 'viewHistory',
  },
];
const menuActions1 = [
  {
    id: '0',
    title: 'Chat với \nchúng tôi',
    icon: I24Support,
    navigate: 'viewHistory',
  },
  {
    id: '1',
    title: 'Trợ giúp',
    icon: Whatsapp,
    navigate: 'viewHistory',
  },
  {
    id: '2',
    title: 'Try&Buy',
    icon: Gift,
    navigate: 'viewHistory',
  },
  {
    id: '3',
    title: 'Nạp thẻ',
    icon: Trade,
    navigate: 'viewHistory',
  },
  {
    id: '4',
    title: 'Live center',
    icon: Zoom,
    navigate: 'viewHistory',
  },
];
const Profile = () => {
  const labels = [
    'Chờ thanh toán',
    'Chờ vận chuyển',
    'Chờ Giao hàng',
    'Đã nhận hàng',
    'Đánh giá',
  ];
  const customStyles = {
    stepIndicatorSize: 45,
    currentStepIndicatorSize: 50,
    separatorStrokeWidth: 2,
    currentStepStrokeWidth: 2,
    stepStrokeCurrentColor: '#fe7013',
    stepStrokeWidth: 0,
    stepStrokeFinishedColor: '#fe7013',
    stepStrokeUnFinishedColor: '#aaaaaa',
    separatorFinishedColor: '#fe7013',
    separatorUnFinishedColor: '#aaaaaa',
    stepIndicatorFinishedColor: '#ffffff',
    stepIndicatorUnFinishedColor: '#ffffff',
    stepIndicatorCurrentColor: '#ffffff',
    stepIndicatorLabelFontSize: 13,
    currentStepIndicatorLabelFontSize: 13,
    stepIndicatorLabelCurrentColor: '#fe7013',
    stepIndicatorLabelFinishedColor: '#ffffff',
    stepIndicatorLabelUnFinishedColor: '#aaaaaa',
    labelColor: '#999999',
    labelSize: 11,
    currentStepLabelColor: '#fe7013',
  };
  const { navigate } = useNavigation();
  const [autoPlay, setAutoPlay] = useState<any>(null);
  const dispatch = useDispatch();
  const [currentPosition, setCurrentPosition] = useState(0);
  const signOut = useAuth.use.signOut();
  useEffect(() => {
    dispatch(fetchUser());
  }, []);

  const userInfo: User = useSelector(selectUserInfo);

  const renderIcon = (position: any) => {
    switch (position.position) {
      case 0:
        return (
          <View key={position.position}>
            {autoPlay === 0 && (
              <LottieView
                style={{ height: ScaleSize(50) }}
                source={require('@/assets/animtions/send-cash-loader.json')}
                autoPlay
                loop
              />
            )}
            {autoPlay !== 0 && (
              <LottieView
                style={{ height: ScaleSize(50) }}
                source={require('@/assets/animtions/send-cash-loader.json')}
              />
            )}
          </View>
        );
      case 1:
        return (
          <View key={position.position}>
            {autoPlay === 1 && (
              <LottieView
                style={{ height: ScaleSize(35) }}
                source={require('@/assets/animtions/wait-delivery.json')}
                autoPlay
                loop
              />
            )}
            {autoPlay !== 1 && (
              <LottieView
                style={{ height: ScaleSize(35) }}
                source={require('@/assets/animtions/wait-delivery.json')}
              />
            )}
          </View>
        );
      case 2:
        return (
          <View key={position.position}>
            {autoPlay === 2 && (
              <LottieView
                style={{ height: ScaleSize(40) }}
                source={require('@/assets/animtions/appy-delivery.json')}
                autoPlay
                loop
              />
            )}
            {autoPlay !== 2 && (
              <LottieView
                style={{ height: ScaleSize(40) }}
                source={require('@/assets/animtions/appy-delivery.json')}
              />
            )}
          </View>
        );
      case 3:
        return (
          <View key={position.position}>
            {autoPlay === 3 && (
              <LottieView
                style={{ height: ScaleSize(100) }}
                source={require('@/assets/animtions/receive-order.json')}
                autoPlay
                loop
              />
            )}
            {autoPlay !== 3 && (
              <LottieView
                style={{ height: ScaleSize(100) }}
                source={require('@/assets/animtions/receive-order.json')}
              />
            )}
          </View>
        );
      case 4:
        return (
          <View key={position.position}>
            {autoPlay === 4 && (
              <LottieView
                style={{ height: ScaleSize(20) }}
                source={require('@/assets/animtions/yellow-comment.json')}
                autoPlay
                loop
              />
            )}
            {autoPlay !== 4 && (
              <LottieView
                style={{ height: ScaleSize(20) }}
                source={require('@/assets/animtions/yellow-comment.json')}
              />
            )}
          </View>
        );

      default:
        break;
    }
  };

  return (
    <View className=" flex-1">
      <ImageBackground
        blurRadius={10}
        resizeMode="cover"
        style={{}}
        source={{
          uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUg_S8jc9xjw-UYRvEBtPdjO1Ytj75rcajbn-FY7z&s',
        }}
      >
        <Image
          source={{
            uri: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnUg_S8jc9xjw-UYRvEBtPdjO1Ytj75rcajbn-FY7z&s',
          }}
          style={{
            width: ScaleSize(60),
            height: ScaleSize(60),
            borderRadius: 1000,
            padding: 10,
            marginLeft: 10,
            top: 50,
          }}
        />
        <Text className="font-extrabold" variant={'xl'} style={{ left: 80 }}>
          {userInfo.FirstName + ' ' + userInfo.LastName}
        </Text>
        <View className="flex flex-row">
          <Text
            className="mr-1 font-semibold"
            variant={'xs'}
            style={{ left: 80 }}
          >
            0
          </Text>
          <Text className="" variant={'xs'} style={{ left: 80 }}>
            Điểm
          </Text>
        </View>
        <TouchableOpacity
          onPress={() => {}}
          style={{
            marginLeft: 40,
            bottom: 50,
            left: 290,
          }}
          className=""
        >
          <Setting2 size={25} color="#201E21" />
        </TouchableOpacity>
      </ImageBackground>
      <View style={styles.container}>
        <View className="p-2">
          <HeaderList
            isTextTransformTitles={false}
            variantTitle="md"
            title="Đơn hàng của tôi"
          />
          <View className="my-1" />
          <StepIndicator
            customStyles={customStyles}
            currentPosition={currentPosition}
            labels={labels}
            renderStepIndicator={(position) => {
              if (position.stepStatus === 'current') {
                setAutoPlay(position.position);
              }
              return (
                <View key={position.position}>{renderIcon(position)}</View>
              );
            }}
          />
          <View className="mb-3" />
          <View className="mx-1 flex flex-row items-center justify-between">
            <TouchableOpacity
              onPress={() => {
                if (currentPosition <= 4 && currentPosition > 0) {
                  setCurrentPosition(currentPosition - 1);
                } else if (currentPosition === 0) {
                  setCurrentPosition(4);
                }
              }}
              className="items-cente flex flex-row"
            >
              <ArrowLeft
                color={currentPosition === 0 ? 'red' : colors.neutral[500]}
              />
              <Text
                style={{
                  color: currentPosition === 0 ? 'red' : colors.neutral[500],
                }}
                className="ml-2"
              >
                Back
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                if (currentPosition >= 0 && currentPosition < 4) {
                  setCurrentPosition(currentPosition + 1);
                } else if (currentPosition === 4) {
                  setCurrentPosition(0);
                }
              }}
              className="flex flex-row items-center"
            >
              <Text
                style={{
                  color: currentPosition === 4 ? 'red' : colors.neutral[500],
                }}
                className="mr-2"
              >
                Next
              </Text>
              <ArrowRight
                size={18}
                color={currentPosition === 4 ? 'red' : colors.neutral[500]}
              />
            </TouchableOpacity>
          </View>
        </View>
        <Card style={styles.menuAction}>
          <ScrollView horizontal showsHorizontalScrollIndicator={false}>
            <View>
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                {menuActions?.map((item: any) => (
                  <ItemMenuAction
                    item={item}
                    onPress={() => {
                      navigate('PointTable');
                    }}
                  />
                ))}
              </View>
              <View className="my-3" />
              <View style={{ display: 'flex', flexDirection: 'row' }}>
                {menuActions1.map((item) => (
                  <ItemMenuAction item={item} onPress={() => {}} />
                ))}
              </View>
            </View>
          </ScrollView>
        </Card>
        <View className="my-3" />
        <ButtonLinear label="Dăng xuất" onPress={signOut} />
      </View>
    </View>
  );
};

export default Profile;
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  menuAction: {
    padding: 10,
  },
});
