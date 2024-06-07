/* eslint-disable max-lines-per-function */

import { useNavigation } from '@react-navigation/native';
import React, { useEffect, useRef } from 'react';
import {
  Animated,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  TextInput,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import { useDispatch, useSelector } from 'react-redux';

import CartPopup from '@/components/popup-cart';
import { fetchCart } from '@/feature/cart/cartSlice';
import { colors, Image, TouchableOpacity, View } from '@/ui';

import CarouselSlider from './carousel';
import Category from './category';
import FeaturedPhones from './featured-phones';
import Laptops from './laptops';
import OuterCategories from './outer-categories';
import PaymentOffer from './payment-offer';
import StandBanner from './permanent-banner';
import TechNews from './tech-news';
const AnimatedTextInput = Animated.createAnimatedComponent(TextInput);

export const Home = () => {
  const { navigate } = useNavigation();
  const dispatch = useDispatch();

  const cartStatus = useSelector((state) => state.cart.status);
  useEffect(() => {
    if (cartStatus === 'idle') {
      dispatch(fetchCart());
    }
  }, [cartStatus, dispatch]);
  const animatedValue = useRef(new Animated.Value(0)).current;
  const scrollViewRef = useRef<ScrollView>(null);
  const lastOffsetY = useRef(0);
  const scrollDirection = useRef('');

  const searchInputAnimation = {
    transform: [
      {
        scaleX: animatedValue.interpolate({
          inputRange: [0, 50],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 25],
          outputRange: [0, -100],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureNameAnimation = {
    transform: [
      {
        scale: animatedValue.interpolate({
          inputRange: [0, 30],
          outputRange: [1, 0],
          extrapolate: 'clamp',
        }),
      },
    ],
    opacity: animatedValue.interpolate({
      inputRange: [0, 30],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const depositViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, 46],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -52],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const withdrawViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -10],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -52],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const qrViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -60],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -52],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const scanViewAnimation = {
    transform: [
      {
        translateX: animatedValue.interpolate({
          inputRange: [0, 80],
          outputRange: [0, -110],
          extrapolate: 'clamp',
        }),
      },
      {
        translateY: animatedValue.interpolate({
          inputRange: [0, 100],
          outputRange: [0, -52],
          extrapolate: 'clamp',
        }),
      },
    ],
  };
  const featureIconCircleAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 25],
      outputRange: [1, 0],
      extrapolate: 'clamp',
    }),
  };
  const featureIconAnimation = {
    opacity: animatedValue.interpolate({
      inputRange: [0, 50],
      outputRange: [0, 1],
      extrapolate: 'clamp',
    }),
  };

  return (
    <View className="flex-1 ">
      <CartPopup />

      {/* <BannerTop />
      <MenuHeader />
      <ScrollView showsVerticalScrollIndicator={false}>
        <CarouselSlider />
        <StandBanner />
        <Category />
        <FeaturedPhones />
        <Laptops />
        <OuterCategories />
        <PaymentOffer />
        <TechNews />
      </ScrollView> */}
      {/* -------------------------------- */}
      <StatusBar barStyle={'light-content'} />
      <SafeAreaView>
        <View style={styles.upperHeaderPlaceholder} />
      </SafeAreaView>

      <SafeAreaView style={styles.header}>
        <LinearGradient
          colors={['#D70019', '#D70019', '#D70019']}
          style={styles.linearGradient}
        >
          <View style={styles.upperHeader}>
            <View style={styles.searchContainer}>
              <TouchableOpacity
                onPress={() => {
                  animatedValue.setValue(0);
                }}
              >
                <Image
                  source={require('@/assets/images/momo/search.png')}
                  style={styles.searchIcon}
                />
              </TouchableOpacity>
              <AnimatedTextInput
                placeholder="Tìm kiếm"
                placeholderTextColor={'rgba(255, 255, 255, 0.8)'}
                style={[styles.searchInput, searchInputAnimation]}
              />
            </View>
            <Image
              source={require('@/assets/images/momo/bell.png')}
              style={styles.bellIcon}
            />
            <Image
              source={require('@/assets/images/momo/avatar.png')}
              style={styles.avatar}
            />
          </View>
          <View style={styles.lowerHeader}>
            <Animated.View style={[styles.feature, depositViewAnimation]}>
              <Animated.Image
                source={require('@/assets/images/momo/deposit-circle.png')}
                style={[styles.featureIconCircles, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require('@/assets/images/momo/deposit.png')}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              {/* <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                NẠP TIỀN
              </Animated.Text> */}
            </Animated.View>
            <Animated.View style={[styles.feature, withdrawViewAnimation]}>
              <Animated.Image
                source={require('@/assets/images/momo/withdraw-circle.png')}
                style={[styles.featureIconCircles, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require('@/assets/images/momo/withdraw.png')}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              {/* <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                RÚT TIỀN{' '}
              </Animated.Text> */}
            </Animated.View>
            <Animated.View style={[styles.feature, qrViewAnimation]}>
              <Animated.Image
                source={require('@/assets/images/momo/qr-circle.png')}
                style={[styles.featureIconCircles, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require('@/assets/images/momo/qr.png')}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              {/* <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                MÃ QR{' '}
              </Animated.Text> */}
            </Animated.View>
            <Animated.View style={[styles.feature, scanViewAnimation]}>
              <Animated.Image
                source={require('@/assets/images/momo/scan-circle.png')}
                style={[styles.featureIconCircles, featureIconCircleAnimation]}
              />
              <Animated.Image
                source={require('@/assets/images/momo/scan.png')}
                style={[styles.featureIcon, featureIconAnimation]}
              />
              {/* <Animated.Text style={[styles.featureName, featureNameAnimation]}>
                QUÉT MÃ{' '}
              </Animated.Text> */}
            </Animated.View>
          </View>
        </LinearGradient>
      </SafeAreaView>

      <ScrollView
        showsVerticalScrollIndicator={false}
        ref={scrollViewRef}
        onScroll={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;
          scrollDirection.current =
            offsetY - lastOffsetY.current > 0 ? 'down' : 'up';
          lastOffsetY.current = offsetY;
          animatedValue.setValue(offsetY);
        }}
        onScrollEndDrag={(e) => {
          const offsetY = e.nativeEvent.contentOffset.y;

          if (offsetY < 195) {
            scrollViewRef.current?.scrollTo({
              y: scrollDirection.current === 'down' ? 100 : 0,
              animated: true,
            });
          }
        }}
        scrollEventThrottle={16}
      >
        <View style={styles.paddingForHeader} />
        <View style={styles.scrollViewContent}>
          <CarouselSlider />
          {/* contens */}
          <View
            style={{
              backgroundColor: 'white',
            }}
          >
            <StandBanner />
            <Category />
            <FeaturedPhones navigation={navigate} />
            <Laptops navigation={navigate} />
            <OuterCategories />
            <PaymentOffer />
            <TechNews />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};
const UPPER_HEADER_HEIGHT = 40;
const LOWER_HEADER_HEIGHT = 60;
const styles = StyleSheet.create({
  container: {
    marginHorizontal: 10,
  },
  linearGradient: {
    flex: 1,
    paddingLeft: 15,
    paddingRight: 15,
    borderRadius: 5,
  },
  upperHeaderPlaceholder: {
    height: 40,
  },
  header: {
    width: '100%',
    position: 'absolute',
    backgroundColor: colors.primary[500],
  },
  upperHeader: {
    height: UPPER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  lowerHeader: {
    height: LOWER_HEADER_HEIGHT,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 16,
    width: '100%',
  },
  paddingForHeader: {
    height: LOWER_HEADER_HEIGHT,
  },
  scrollViewContent: {
    // height: HEIGHT * 2,
    marginTop: 2,
  },

  searchContainer: {
    flex: 1,
    marginBottom: 5,
    justifyContent: 'center',
  },
  searchIcon: { width: 20, height: 20, marginLeft: 15 },
  bellIcon: { width: 16, height: 16, marginHorizontal: 19 },
  avatar: { width: 28, height: 28 },
  searchInput: {
    position: 'absolute',
    width: '100%',
    borderRadius: 7,
    marginLeft: 8,
    color: 'white',
    backgroundColor: 'rgba(255, 255, 255, 0.3)',
    paddingVertical: 9,
    paddingLeft: 32,
  },

  feature: {
    alignItems: 'center',
  },
  featureIconCircles: {
    width: 32,
    height: 32,
  },
  featureIcon: {
    width: 16,
    height: 16,
    position: 'absolute',
    top: 8,
  },
  featureName: {
    fontSize: 12,
    fontWeight: 'bold',
    color: 'white',
    marginTop: 12,
    lineHeight: 14,
  },
});
/* eslint-enable max-lines-per-function */
