import type { ConfigContext, ExpoConfig } from '@expo/config';

import { ClientEnv, Env, withEnvSuffix } from './env';

export default ({ config }: ConfigContext): ExpoConfig => ({
  ...config,
  name: Env.NAME,
  description: `${Env.NAME} Mobile App`,
  slug: 'obytesapp',
  version: Env.VERSION.toString(),
  orientation: 'portrait',
  icon: `${withEnvSuffix('./assets/icon')}.png`,
  userInterfaceStyle: 'automatic',
  splash: {
    image: './assets/splash.png',
    resizeMode: 'cover',
    backgroundColor: '#ffff',
  },
  updates: {
    fallbackToCacheTimeout: 0,
  },
  assetBundlePatterns: ['**/*'],
  ios: {
    supportsTablet: true,
    bundleIdentifier: Env.BUNDLE_ID,
  },
  android: {
    adaptiveIcon: {
      foregroundImage: `${withEnvSuffix('./assets/icon')}.png`,
      backgroundColor: '#FFFFFF',
    },
    package: Env.PACKAGE,
  },
  web: {
    favicon: './assets/favicon.png',
  },
  plugins: [
    ['@bacons/link-assets', ['./assets/fonts/Inter.ttf']],
    'expo-localization',
  ],
  extra: {
    ...ClientEnv,
    eas: {
      projectId: 'ee3642c6-beae-4847-bde6-36ad048b04e4',
    },
  },
});
