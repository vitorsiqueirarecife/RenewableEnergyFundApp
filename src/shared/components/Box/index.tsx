import styled from 'styled-components';
import {View} from 'react-native';
import {
  color,
  space,
  layout,
  flexbox,
  grid,
  border,
  position,
  textAlign,
} from 'styled-system';

import {BoxProps} from './types';

const Box = styled(View)<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${position}
  ${textAlign}
`;

export default Box;
