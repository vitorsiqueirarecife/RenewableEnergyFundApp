import {FieldError} from 'react-hook-form';

export type Props = {
  onSelect: () => void;
  isSelected?: boolean;
  error?: FieldError | undefined;
};
