import styled from 'styled-components';
import {TouchableOpacity} from 'react-native';
import {
  display,
  border,
  flexbox,
  space,
  position,
  width,
  height,
  color,
} from 'styled-system';

import {ButtonBaseProps} from './types';

const ButtonBase = styled(TouchableOpacity)<ButtonBaseProps>`
  ${display}
  ${flexbox}
  ${space}
  ${border}
  ${position}
  ${width}
  ${height}
  ${color}
`;
export default ButtonBase;
