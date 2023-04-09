import React from 'react';

import Box from '../../../../../../shared/components/Box';
import Typography from '../../../../../../shared/components/Typography';

import ButtonBase from '../../../../../../shared/components/ButtonBase';
import Image from '../../../../../../shared/components/Image';
import {style} from './styles';
import {Props} from './types';

const News = ({image, logo, text}: Props) => {
  return (
    <Box width={220} borderColor="#E6E6E6" borderWidth={1}>
      <Box>
        <Image source={image} style={style} />
      </Box>
      <Box paddingX={2} paddingY={3}>
        <Image source={logo} resizeMode="cover" />
      </Box>
      <Box padding={2}>
        <Typography fontSize={14} fontWeight={400} color="#000">
          {text}
        </Typography>
      </Box>

      <ButtonBase padding={2} marginBottom={2}>
        <Typography textDecoration fontSize={14} fontWeight={400} color="#000">
          Read more
        </Typography>
      </ButtonBase>
    </Box>
  );
};

export default News;
