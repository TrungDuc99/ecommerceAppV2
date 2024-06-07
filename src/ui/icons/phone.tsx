import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Circle, G, Path } from 'react-native-svg';

export const Phone = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width="24" height="24" viewBox="0 0 19 32" {...props}>
    <G fill={color}>
      <Path d="M1.5 32h16c.827 0 1.5-.673 1.5-1.5v-29c0-.827-.673-1.5-1.5-1.5h-16C.673 0 0 .673 0 1.5v29c0 .827.673 1.5 1.5 1.5zM1 1.5a.5.5 0 0 1 .5-.5h16a.5.5 0 0 1 .5.5v29a.5.5 0 0 1-.5.5h-16a.5.5 0 0 1-.5-.5v-29z" />
      <Path d="M2.5 27h14a.5.5 0 0 0 .5-.5v-21a.5.5 0 0 0-.5-.5h-14a.5.5 0 0 0-.5.5v21a.5.5 0 0 0 .5.5zM3 6h13v20H3V6z" />
      <Circle cx={10} cy={29} r={1} />
      <Path d="M7.5 4h4a.5.5 0 0 0 0-1h-4a.5.5 0 0 0 0 1z" />
    </G>
  </Svg>
);
