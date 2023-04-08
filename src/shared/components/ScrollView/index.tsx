import styled from 'styled-components';
import {ScrollView as ScrollViewRN} from 'react-native';
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
import {BoxProps} from '../Box/types';

const ScrollView = styled(ScrollViewRN)<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${position}
  ${textAlign}
`;

export default ScrollView;
