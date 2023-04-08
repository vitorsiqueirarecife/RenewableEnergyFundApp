import {FieldError} from 'react-hook-form';
import {TextInputProps} from 'react-native/types';

export interface Props extends TextInputProps {
  title: string;
  error?: FieldError | undefined;
  multiline?: boolean;
  numberOfLines?: number;
}
