import React, {useMemo} from 'react';
import {LineChart as LineChartLib} from 'react-native-chart-kit';
import {Props} from './types';
import {style} from './styles';
import {AbstractChartConfig} from 'react-native-chart-kit/dist/AbstractChart';

const LineChart = ({lineColor, variationPoints, height, width}: Props) => {
  const chartConfig: AbstractChartConfig = useMemo(() => {
    return {
      backgroundGradientFrom: '#FFF',
      backgroundGradientTo: '#FFF',
      decimalPlaces: 1,
      color: () => lineColor,
      style: {
        borderRadius: 1,
      },
      strokeWidth: 1.5,
    };
  }, [lineColor]);

  const data = useMemo(() => {
    return {
      labels: variationPoints.map(i => i.toString()),
      datasets: [
        {
          data: variationPoints,
        },
      ],
    };
  }, [variationPoints]);

  return (
    <LineChartLib
      data={data}
      style={style}
      width={width}
      height={height}
      withVerticalLabels={false}
      withHorizontalLabels={false}
      withInnerLines={false}
      withOuterLines={false}
      withShadow={false}
      withHorizontalLines={false}
      withDots={false}
      withVerticalLines={false}
      withScrollableDot={false}
      chartConfig={chartConfig}
      bezier
    />
  );
};

export default LineChart;
