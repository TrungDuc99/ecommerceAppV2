import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export const Category = ({ color = '#000', ...props }: SvgProps) => (
  <Svg width="29" height="29" viewBox="0 0 20 20" {...props}>
    <Path
      fill={color}
      d="M6.75 8a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zm.75 2.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0zM6.75 14a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5zM9 7.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zm.5 2.5a.5.5 0 0 0 0 1h4a.5.5 0 0 0 0-1h-4zM9 13.5a.5.5 0 0 1 .5-.5h4a.5.5 0 0 1 0 1h-4a.5.5 0 0 1-.5-.5zM5.75 3h8.5A2.75 2.75 0 0 1 17 5.75v8.5A2.75 2.75 0 0 1 14.25 17h-8.5A2.75 2.75 0 0 1 3 14.25v-8.5A2.75 2.75 0 0 1 5.75 3zM4 5.75v8.5c0 .966.784 1.75 1.75 1.75h8.5A1.75 1.75 0 0 0 16 14.25v-8.5A1.75 1.75 0 0 0 14.25 4h-8.5A1.75 1.75 0 0 0 4 5.75z"
    />
  </Svg>
);
