import {TouchableOpacityProps} from 'react-native';
import {
  BackgroundColorProps,
  BorderColorProps,
  TextColorProps,
} from 'styled-system';

type Variant = 'primary' | 'secondary' | 'success';

export interface Props extends TouchableOpacityProps {
  children: string;
  variant: Variant;
}

export type Style = {
  backgroundColor: BackgroundColorProps['backgroundColor'];
  borderColor: BorderColorProps['borderColor'];
  textColor: TextColorProps['color'];
};
