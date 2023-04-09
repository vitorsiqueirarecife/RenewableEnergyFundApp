import React from 'react';
import {Props} from './types';
import Box from '../../../../../shared/components/Box';
import Typography from '../../../../../shared/components/Typography';
import Item from './Item';

const Info = ({asset}: Props) => {
  return (
    <Box width="100%" padding={20}>
      <Box marginBottom={20}>
        <Typography fontSize={17} fontWeight={600} color="#000">
          Info & Stats
        </Typography>
      </Box>

      <Box width="100%" display="flex" flexDirection="row" flexWrap="wrap">
        <Item key="AUM" name="AUM" valeu={asset.aum} />
        <Item key="Issue Date" name="Issue Date" valeu={asset.issueDate} />
        <Item
          key="Vintage Range"
          name="Vintage Range"
          valeu={asset.vintageRange}
        />
        <Item key="TER" name="TER" valeu={asset.ter} />
        <Item
          key="Price at Close"
          name="Price at Close"
          valeu={asset.priceAtClose}
        />
        <Item
          key="Price at Open"
          name="Price at Open"
          valeu={asset.priceAtOpen}
        />
      </Box>
    </Box>
  );
};

export default Info;
