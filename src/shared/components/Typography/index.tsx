import styled from 'styled-components';
import {Text} from 'react-native';

import {
  color,
  fontFamily,
  fontStyle,
  textStyle,
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
  ${textStyle}
  text-decoration: ${({textDecoration}) => {
    if (textDecoration === true) {
      return 'underline';
    }
    return 'none';
  }};
`;

export default Typography;
