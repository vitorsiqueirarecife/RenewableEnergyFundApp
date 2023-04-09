export const IconSizes = {
  small: 13,
  medium: 18,
  large: 23,
  extraLarge: 27,
  extraLarge1: 33,
};

type IconSizeProps = {
  iconSizes: keyof typeof IconSizes;
};

export interface IconProps {
  size: IconSizeProps['iconSizes'];
  name: string;
  color: string;
}
