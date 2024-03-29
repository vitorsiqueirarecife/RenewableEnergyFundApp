import {TouchableOpacityProps} from 'react-native';
import {
  BackgroundColorProps,
  BorderColorProps,
  TextColorProps,
} from 'styled-system';

type Variant = 'primary' | 'secondary' | 'tertiary' | 'success' | 'transparent';

export interface Props extends TouchableOpacityProps {
  children: string;
  height?: number;
  variant?: Variant;
  iconName?: string;
  fontSize?: number;
  fontWeight?: string;
  paddingY?: number;
}

export type Style = {
  backgroundColor: BackgroundColorProps['backgroundColor'];
  borderColor: BorderColorProps['borderColor'];
  textColor: TextColorProps['color'];
  iconColor: string;
};
