import React from 'react';

import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import {Icon} from '../../../../../shared/components/Icon';
import Button from '../../../../../shared/components/Button';
import Input from '../../../../../shared/components/Input';

const YourPortfolio = () => {
  return (
    <Box width="100%" padding={20}>
      <Box marginBottom={20} flexDirection="row">
        <Icon size="large" color="#000" name={'chart-donut'} />
        <Box marginLeft={1}>
          <Typography fontSize={17} fontWeight={600} color="#000">
            Your Portfolio
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        alignItems="center">
        <Box display="flex" flexDirection="column">
          <Typography fontWeight="600" fontSize={24} color="#000">
            18 credits
          </Typography>
          <Box display="flex" flexDirection="row" alignItems="center">
            <Icon
              size="small"
              color={'#0FDF8F'}
              name={'arrow-top-right-thin'}
            />
            <Typography color={'#0FDF8F'}>8.41%</Typography>
          </Box>
        </Box>
        <Box display="flex" flexDirection="column" alignItems="flex-end">
          <Typography fontWeight="600" fontSize={24} color="#000">
            $328.14
          </Typography>

          <Typography color="#A0A0A0" fontSize={14} fontWeight={400}>
            Last purchase 28d ago
          </Typography>
        </Box>
      </Box>

      <Box
        width="100%"
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        marginY={3}>
        <Box width="48%">
          <Button variant="secondary">Sell</Button>
        </Box>
        <Box width="48%">
          <Button variant="success">Retire credits</Button>
        </Box>
      </Box>

      <Box marginBottom={20}>
        <Typography fontSize={13} color="#A0A0A0" fontWeight="400">
          You've previously retired 28 credits of this asset
        </Typography>
      </Box>

      <Box marginBottom={20}>
        <Input
          multiline
          numberOfLines={5}
          placeholder="Please note that prices are for reference only and may vary at the time of excecuting a buy or sell order. The information provided is not investment advice, and should not be used as a recommendation to buy or sell assets."
        />
      </Box>

      <Box marginBottom={90}>
        <Button variant="primary">Buy</Button>
      </Box>
    </Box>
  );
};

export default YourPortfolio;
