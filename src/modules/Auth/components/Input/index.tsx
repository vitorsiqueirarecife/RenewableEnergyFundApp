import React from 'react';
import Box from '../../../../shared/components/Box';
import {InputBase} from '../../../../shared/components/InputBase';
import Typography from '../../../../shared/components/Typography';
import {Props} from './types';

const Input = ({title, error, ...rest}: Props) => {
  return (
    <Box display="flex" flexDirection="column" width="100%" flexGrow={0}>
      <Box flex={1}>
        <Typography fontSize={11} fontWeight="400">
          {title}
        </Typography>
      </Box>
      <Box flex={1}>
        <InputBase
          multiline={false}
          border={error ? '1px solid red' : '1px solid #e8e8e8'}
          placeholderTextColor="#CFCFCF"
          {...rest}
        />
      </Box>
      {error && (
        <Box>
          <Typography color="red" fontSize={11}>
            {error.message}
          </Typography>
        </Box>
      )}
    </Box>
  );
};

export default Input;
