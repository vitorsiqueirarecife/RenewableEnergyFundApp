import React, {memo, useMemo} from 'react';
import Box from '../../../../../../shared/components/Box';
import {Props} from './types';
import LineChart from '../../../../../../shared/components/LineChart';
import Typography from '../../../../../../shared/components/Typography';
import {Icon} from '../../../../../../shared/components/Icon';

const FundItem = ({
  iconColor,
  iconName,
  name,
  value,
  variation,
  variationPoints,
}: Props) => {
  const variationColor = useMemo(() => {
    if (variation > 0) {
      return '#0FDF8F';
    }

    if (variation < 0) {
      return '#EE8688';
    }

    return '#8a8a8a';
  }, [variation]);

  const variationIconName = useMemo(() => {
    if (variation > 0) {
      return 'arrow-top-right-thin';
    }

    if (variation < 0) {
      return 'arrow-bottom-right-thin';
    }
  }, [variation]);

  return (
    <Box
      borderColor="#E6E6E6"
      borderWidth={1}
      borderRadius={4}
      marginX={12}
      minWidth={145}
      height={160}
      padding={12}>
      <Box marginBottom={1}>
        <Icon size="small" color={iconColor} name={iconName} />
      </Box>
      <Typography fontSize={12} color="#000" fontWeight="600">
        {name}
      </Typography>
      <LineChart
        variationPoints={variationPoints}
        lineColor={variationColor}
        width={100}
        height={70}
      />
      <Box display="flex" flexDirection="row" alignItems="flex-end" marginY={2}>
        <Typography fontSize={14} color="#000" fontWeight="400">
          ${value}
        </Typography>
        <Box
          display="flex"
          flexDirection="row"
          alignItems="flex-end"
          marginX={2}>
          {variation !== 0 && variationIconName && (
            <Icon
              size="small"
              color={variationColor}
              name={variationIconName}
            />
          )}
          <Typography color={variationColor} fontSize={14} fontWeight="400">
            {variation}%
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default memo(FundItem);
