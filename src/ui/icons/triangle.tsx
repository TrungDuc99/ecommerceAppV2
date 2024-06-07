import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Triangle({ color = '#F82325', ...props }: SvgProps) {
  return (
    <Svg width="22" height="22" {...props}>
      <Path
        fill={color}
        d="M11.646 15.146 5.854 9.354a.5.5 0 0 1 .353-.854h11.586a.5.5 0 0 1 .353.854l-5.793 5.792a.5.5 0 0 1-.707 0z"
      />
    </Svg>
  );
}
