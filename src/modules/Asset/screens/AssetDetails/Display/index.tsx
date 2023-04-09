import React, {useMemo} from 'react';
import {Dimensions} from 'react-native';
import {Peaks, Props} from './types';
import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import {Icon} from '../../../../../shared/components/Icon';
import LineChart from '../../../../../shared/components/LineChart';
import Button from '../../../../../shared/components/Button';

const Display = ({asset}: Props) => {
  const peaks: Peaks | null = useMemo(() => {
    const {variationPoints} = asset;
    const max = Math.max.apply(null, variationPoints);
    const min = Math.min.apply(null, variationPoints);

    return {
      max,
      maxPosition: variationPoints.indexOf(max),
      min,
      minPosition: variationPoints.indexOf(min),
    };
  }, [asset]);

  const variationColor = useMemo(() => {
    if (asset.variation > 0) {
      return '#0FDF8F';
    }

    if (asset.variation < 0) {
      return '#EE8688';
    }

    return '#8a8a8a';
  }, [asset]);

  const variationIconName = useMemo(() => {
    if (asset.variation > 0) {
      return 'arrow-top-right-thin';
    }

    if (asset.variation < 0) {
      return 'arrow-bottom-right-thin';
    }
  }, [asset]);

  const windowWidth = useMemo(() => Dimensions.get('window').width, []);

  return (
    <Box width="100%">
      <Box
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center"
        padding={20}>
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="600" fontSize={24} color="#000">
            ${asset.value}
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            {variationColor && asset.variation !== 0 && variationIconName && (
              <Icon
                size="small"
                color={variationColor}
                name={variationIconName}
              />
            )}
            <Typography color={variationColor}>
              {asset.variation}% ({asset.variationValue})
            </Typography>
          </Box>
        </Box>
        <Typography fontWeight="600" fontSize={24} color="#000">
          {asset.year}
        </Typography>
      </Box>
      <Box overflowX="clip" position="relative">
        {peaks && (
          <Box
            position="absolute"
            top={0}
            zIndex={200}
            left={
              (windowWidth / asset.variationPoints.length) * peaks.maxPosition +
              10
            }>
            <Typography fontSize={14} fontWeight="500" color="#A0A0A0">
              ${peaks.max}
            </Typography>
          </Box>
        )}

        {peaks && (
          <Box
            position="absolute"
            bottom={0}
            zIndex={200}
            left={
              (windowWidth / asset.variationPoints.length) * peaks.minPosition +
              10
            }>
            <Typography fontSize={14} fontWeight="500" color="#A0A0A0">
              ${peaks.min}
            </Typography>
          </Box>
        )}

        {variationColor && (
          <LineChart
            lineColor={variationColor}
            variationPoints={asset.variationPoints}
            height={170}
            width={windowWidth + 68}
            isBezier={false}
          />
        )}
      </Box>

      <Box
        display="flex"
        width="100%"
        flexDirection="row"
        paddingY={3}
        paddingX={20}
        justifyContent="space-between">
        <Box width={35}>
          <Button variant="transparent" paddingY={0} height={35}>
            1h
          </Button>
        </Box>

        <Box width={35}>
          <Button variant="tertiary" paddingY={0} height={35}>
            1d
          </Button>
        </Box>

        <Box width={35}>
          <Button variant="transparent" paddingY={0} height={35}>
            1w
          </Button>
        </Box>

        <Box width={35}>
          <Button variant="transparent" paddingY={0} height={35}>
            1m
          </Button>
        </Box>

        <Box width={35}>
          <Button variant="transparent" paddingY={0} height={35}>
            1y
          </Button>
        </Box>

        <Box width={35}>
          <Button variant="transparent" paddingY={0} height={35}>
            All
          </Button>
        </Box>
      </Box>
    </Box>
  );
};

export default Display;
