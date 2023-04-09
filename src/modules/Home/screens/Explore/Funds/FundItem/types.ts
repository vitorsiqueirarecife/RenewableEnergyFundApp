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
};

export type Props = Fund;
