import {
  DisplayProps,
  FlexboxProps,
  PaddingProps,
  BorderProps,
  PositionProps,
  WidthProps,
  HeightProps,
  SpaceProps,
  ColorProps,
} from 'styled-system';

export interface ButtonBaseProps
  extends DisplayProps,
    FlexboxProps,
    PaddingProps,
    BorderProps,
    PositionProps,
    WidthProps,
    HeightProps,
    ColorProps,
    SpaceProps {}
