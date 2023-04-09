import React from 'react';
import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import ScrollView from '../../../../../shared/components/ScrollView';
import {mockFunds} from './mock';
import FundItem from './FundItem';

const Funds = () => {
  return (
    <Box>
      <Box margin={20}>
        <Typography fontSize={18} color="#000000" fontWeight="600">
          Funds
        </Typography>
      </Box>
      <ScrollView height={170} marginBottom={10} horizontal>
        {mockFunds.map(fundItem => {
          const {
            id,
            iconColor,
            iconName,
            name,
            value,
            variation,
            variationPoints,
          } = fundItem;

          return (
            <FundItem
              key={id}
              iconColor={iconColor}
              iconName={iconName}
              name={name}
              value={value}
              variation={variation}
              variationPoints={variationPoints}
            />
          );
        })}
      </ScrollView>
    </Box>
  );
};

export default Funds;
