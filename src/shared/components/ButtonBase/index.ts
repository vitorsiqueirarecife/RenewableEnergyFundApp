import styled from 'styled-components';

import {
  display,
  border,
  flexbox,
  space,
  position,
  width,
  color,
} from 'styled-system';

import {ButtonBaseProps} from './types';

const ButtonBase = styled.button<ButtonBaseProps>`
  ${color}
  ${display}
  ${flexbox}
  ${space}
  ${border}
  ${position}
  ${width}
  cursor: pointer;
`;
export default ButtonBase;
