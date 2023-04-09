import {Fund} from '../../../../../shared/models';

export type Props = {
  asset: Fund;
};

export type Peaks = {
  max: number;
  maxPosition: number;
  min: number;
  minPosition: number;
};
