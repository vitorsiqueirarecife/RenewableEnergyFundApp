import React from 'react';
import Box from '../../../../../../shared/components/Box';
import ButtonBase from '../../../../../../shared/components/ButtonBase';
import Typography from '../../../../../../shared/components/Typography';
import {Props} from './types';

const BlogItem = ({title}: Props) => {
  return (
    <ButtonBase
      borderRadius={10}
      height={215}
      width="93%"
      padding={20}
      backgroundColor="#F4F4F4">
      <Box flex={1} display="flex" flexDirection="row">
        <Typography fontSize={12} fontWeight="600" color="#000000">
          {title}
        </Typography>
      </Box>
    </ButtonBase>
  );
};

export default BlogItem;
