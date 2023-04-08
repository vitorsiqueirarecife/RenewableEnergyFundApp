import {
  FontSizeProps,
  LineHeightProps,
  TextColorProps,
  FontWeightProps,
  TypographyProps as TypographySSProps,
} from 'styled-system';

export type LinkProps = TextColorProps &
  TypographySSProps &
  LineHeightProps &
  FontSizeProps &
  FontWeightProps;

export interface Props extends LinkProps {
  children: string;
}
