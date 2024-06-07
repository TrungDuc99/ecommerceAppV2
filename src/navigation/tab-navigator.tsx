import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import type { RouteProp } from '@react-navigation/native';
import type { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Buildings2, MoreSquare, ProfileCircle } from 'iconsax-react-native';
import Lottie from 'lottie-react-native';
import { useColorScheme } from 'nativewind';
import type { ComponentType } from 'react';
import * as React from 'react';
import type { SvgProps } from 'react-native-svg';

import { ScaleSize } from '@/configs';
import { Style } from '@/screens';
import Profile from '@/screens/profile';
import {
  Category as CategoryIcon,
  colors,
  Feed as FeedIcon,
  Home as HomeIcon,
  Settings as SettingsIcon,
  Style as StyleIcon,
} from '@/ui';

import { FeedNavigator } from './feed-navigator';
import { HomeNavigator } from './home-navigator';

type TabParamList = {
  Style: undefined;
  FeedNavigator: undefined;
  Settings: undefined;
  HomeNavigator: undefined;
  Stores: undefined;
  User: undefined;
  Category: undefined;
  More: undefined;
};

type TabType = {
  name: keyof TabParamList;
  component: ComponentType<any>;
  label: string;
};

type TabIconsType = {
  [key in keyof TabParamList]: (props: SvgProps) => JSX.Element;
};

const Tab = createBottomTabNavigator<TabParamList>();

const tabsIcons: TabIconsType = {
  Style: (props: SvgProps) => <StyleIcon {...props} />,
  FeedNavigator: (props: SvgProps) => <FeedIcon {...props} />,
  Settings: (props: SvgProps) => <SettingsIcon {...props} />,
  HomeNavigator: (props: SvgProps) => {
    if (props.color === '#D70018') {
      return <HomeIcon {...props} />;
    } else {
      return (
        <Lottie
          style={{ height: ScaleSize(75) }}
          source={require('@/assets/animtions/home.json')}
          autoPlay
          loop
        />
      );
    }
  },
  Category: (props: SvgProps) => <CategoryIcon {...props} />,
  Stores: (props: any) => <Buildings2 color={props.color} size={22} />,
  User: (props: any) => <ProfileCircle color={props.color} size={22} />,
  More: (props: any) => <MoreSquare color={props.color} />,
};

export type TabList<T extends keyof TabParamList> = {
  navigation: NativeStackNavigationProp<TabParamList, T>;
  route: RouteProp<TabParamList, T>;
};

const tabs: TabType[] = [
  {
    name: 'HomeNavigator',
    component: HomeNavigator,
    label: 'Trang chủ',
  },

  {
    name: 'Category',
    component: FeedNavigator,
    label: 'Danh mục',
  },
  {
    name: 'Stores',
    component: Style,
    label: 'Cửa hàng',
  },

  {
    name: 'User',
    component: Profile,
    label: 'Cá nhân',
  },
  // {
  //   name: 'More',
  //   component: More,
  //   label: 'Xem thêm',
  // },
  // {
  //   name: 'Style',
  //   component: Style,
  //   label: 'Style',
  // },
  // {
  //   name: 'Settings',
  //   component: Settings,
  //   label: 'Settings',
  // },
];

type BarIconType = {
  name: keyof TabParamList;
  color: string;
};

const BarIcon = ({ color, name, ...reset }: BarIconType) => {
  const Icon = tabsIcons[name];
  return <Icon color={color} {...reset} />;
};

export const TabNavigator = () => {
  const { colorScheme } = useColorScheme();
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarInactiveTintColor:
          colorScheme === 'dark' ? colors.charcoal[400] : colors.neutral[400],
        // eslint-disable-next-line react/no-unstable-nested-components
        tabBarIcon: ({ color }) => <BarIcon name={route.name} color={color} />,
      })}
    >
      <Tab.Group
        screenOptions={{
          headerShown: false,
        }}
      >
        {tabs.map(({ name, component, label }) => {
          return (
            <Tab.Screen
              key={name}
              name={name}
              component={component}
              options={{
                title: label,
              }}
            />
          );
        })}
      </Tab.Group>
    </Tab.Navigator>
  );
};
