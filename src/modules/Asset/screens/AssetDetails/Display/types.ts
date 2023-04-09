import {Fund} from '../../../../Home/screens/Explore/Funds/FundItem/types';

export type Props = {
  asset: Fund;
};

export type Peaks = {
  max: number;
  maxPosition: number;
  min: number;
  minPosition: number;
};
