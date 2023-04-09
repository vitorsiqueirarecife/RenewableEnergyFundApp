import {ImageSourcePropType} from 'react-native';

export type News = {
  id: string;
  image: ImageSourcePropType;
  logo: ImageSourcePropType;
  text: string;
};

export type Fund = {
  id: string;
  iconName: string;
  iconColor: string;
  name: string;
  value: number;
  variation: number;
  variationValue: number;
  variationPoints: number[];
  code: string;
  year: string;
  aum: string;
  issueDate: string;
  vintageRange: string;
  ter: string;
  priceAtClose: string;
  priceAtOpen: string;
  news?: News[];
};
