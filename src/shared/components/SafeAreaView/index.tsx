import styled from 'styled-components';
import {SafeAreaView as SafeAreaViewRN} from 'react-native';
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

const SafeAreaView = styled(SafeAreaViewRN)<BoxProps>`
  ${color}
  ${space}
  ${layout}
  ${flexbox}
  ${grid}
  ${border}
  ${position}
  ${textAlign}
`;

export default SafeAreaView;
