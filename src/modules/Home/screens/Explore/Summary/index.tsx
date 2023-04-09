import React from 'react';
import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import {Icon} from '../../../../../shared/components/Icon';
import Button from '../../../../../shared/components/Button';

const Summary = () => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      height={90}
      paddingX={20}
      borderBottomColor="#F4F4F4"
      borderBottomWidth={1}>
      <Box display="flex" justifyContent="center" flex={2}>
        <Typography color="#000000" fontSize={12} fontWeight="400">
          Portfolio
        </Typography>
        <Box display="flex" flexDirection="row">
          <Box>
            <Typography color="#000000" fontSize={24} fontWeight="600">
              $1,245.23
            </Typography>
          </Box>
          <Box display="flex" flexDirection="row" alignItems="flex-end">
            <Icon size="small" color="#0FDF8F" name="arrow-top-right" />
            <Typography color="#0FDF8F" fontSize={14} fontWeight="400">
              31.82%
            </Typography>
          </Box>
        </Box>
      </Box>
      <Box display="flex" justifyContent="center" flex={1}>
        <Button
          fontSize={11}
          fontWeight="600"
          height={40}
          variant="tertiary"
          iconName="hand-coin-outline">
          Earn Rewards
        </Button>
      </Box>
    </Box>
  );
};

export default Summary;
