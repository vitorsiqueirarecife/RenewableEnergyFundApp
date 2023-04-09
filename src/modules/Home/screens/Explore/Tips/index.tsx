import React from 'react';
import Box from '../../../../../shared/components/Box';
import ButtonBase from '../../../../../shared/components/ButtonBase';
import Image from '../../../../../shared/components/Image';
import businessStatistics from '../../../assets/business-statistics.png';
import Typography from '../../../../../shared/components/Typography';

const Tips = () => {
  return (
    <Box height={125} paddingY={10} paddingX={20}>
      <ButtonBase
        borderRadius={10}
        height={105}
        width="100%"
        padding={20}
        backgroundColor="#770FDF">
        <Box flex={1} display="flex" flexDirection="row">
          <Box flex={2}>
            <Box marginBottom={2}>
              <Typography fontSize={16} fontWeight="600" color="#FFFFFF">
                Learn more about carbon credits
              </Typography>
            </Box>
            <Typography fontSize={12} fontWeight="400" color="#FFFFFF">
              Check out our top tips!
            </Typography>
          </Box>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="flex-end"
            flex={1}>
            <Image source={businessStatistics} />
          </Box>
        </Box>
      </ButtonBase>
    </Box>
  );
};

export default Tips;
