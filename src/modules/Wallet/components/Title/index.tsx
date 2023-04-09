import React from 'react';
import Box from '../../../../shared/components/Box';
import {Props} from './types';
import Typography from '../../../../shared/components/Typography';

const Title = ({children}: Props) => {
  return (
    <Box
      display="flex"
      justifyContent="center"
      alignItems="center"
      height={50}
      width="100%">
      <Typography color="#000" fontSize={18} fontWeight="bold">
        {children}
      </Typography>
    </Box>
  );
};

export default Title;
