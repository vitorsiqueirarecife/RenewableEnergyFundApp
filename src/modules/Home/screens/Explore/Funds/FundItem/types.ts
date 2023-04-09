type FoundBase = {
  iconName: string;
  iconColor: string;
  name: string;
  variation: number;
  value: number;
  variationPoints: number[];
};

export type Found = FoundBase & {
  id: string;
};

export type Props = FoundBase;
