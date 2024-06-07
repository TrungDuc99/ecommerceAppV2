import * as React from 'react';
import type { SvgProps } from 'react-native-svg';
import Svg, { Path } from 'react-native-svg';

export function Cart({ color = '#000', ...props }: SvgProps) {
  return (
    <Svg viewBox="0 0 24 24" {...props}>
      <Path
        fill={color}
        d="M19 7h-3V6a4 4 0 0 0-8 0v1H5a1 1 0 0 0-1 1v11a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3V8a1 1 0 0 0-1-1zm-9-1a2 2 0 0 1 4 0v1h-4zm8 13a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1V9h2v1a1 1 0 0 0 2 0V9h4v1a1 1 0 0 0 2 0V9h2z"
      />
    </Svg>
  );
}
