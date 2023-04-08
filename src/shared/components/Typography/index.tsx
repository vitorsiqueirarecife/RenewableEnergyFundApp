import styled from 'styled-components';
import {Text} from 'react-native';

import {
  color,
  fontFamily,
  fontStyle,
  textAlign,
  fontWeight,
  fontSize,
} from 'styled-system';
import {TypographyProps} from './types';

const Typography = styled(Text)<TypographyProps>`
  ${fontSize}
  ${fontWeight}
  ${fontFamily}
  ${fontStyle}
  ${color}
  ${textAlign}
`;

export default Typography;
