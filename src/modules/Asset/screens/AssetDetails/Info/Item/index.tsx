import React from 'react';
import {Props} from './types';
import Box from '../../../../../../shared/components/Box';
import Typography from '../../../../../../shared/components/Typography';
import {Icon} from '../../../../../../shared/components/Icon';
import ButtonBase from '../../../../../../shared/components/ButtonBase';

const Item = ({name, valeu}: Props) => {
  return (
    <Box width="50%">
      <Box display="flex" flexDirection="row" alignItems="center">
        <Typography fontSize={14} fontWeight={400} color="#A0A0A0">
          {name}
        </Typography>
        <ButtonBase marginLeft={1}>
          <Icon size="small" color="#A0A0A0" name="information-outline" />
        </ButtonBase>
      </Box>
      <Box display="flex" flexDirection="row" marginBottom={10}>
        <Typography fontSize={14} fontWeight={400} color="#000">
          {valeu}
        </Typography>
      </Box>
    </Box>
  );
};

export default Item;
