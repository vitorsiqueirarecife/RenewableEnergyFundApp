import {ReactNode} from 'react';
import {
  SpaceProps,
  ColorProps,
  LayoutProps,
  FlexboxProps,
  GridProps,
  BorderProps,
  PositionProps,
  TextAlignProps,
} from 'styled-system';

export type BoxProps = SpaceProps &
  ColorProps &
  LayoutProps &
  FlexboxProps &
  GridProps &
  BorderProps &
  PositionProps &
  TextAlignProps;
export interface Props extends BoxProps {
  children: ReactNode;
}
