import React from 'react';
import Box from '../../../../shared/components/Box';
import {InputBase} from '../../../../shared/components/InputBase';
import Typography from '../../../../shared/components/Typography';
import {Props} from './types';
import {TouchableOpacity} from 'react-native';

const Input = ({title, error, adornment, adornmentAction, ...rest}: Props) => {
  return (
    <Box display="flex" flexDirection="column" width="100%" flexGrow={0}>
      <Box flex={1} marginBottom={1}>
        <Typography fontSize={11} fontWeight="400">
          {title}
        </Typography>
      </Box>
      <Box flex={1} position="relative" width="100%">
        <InputBase
          multiline={false}
          border={error ? '1px solid red' : '1px solid #e8e8e8'}
          placeholderTextColor="#CFCFCF"
          {...rest}
        />
        <Box
          position="absolute"
          right={3}
          top="0"
          bottom="0"
          marginTop="auto"
          marginBottom="auto"
          justifyContent="center">
          <TouchableOpacity onPress={adornmentAction}>
            {adornment}
          </TouchableOpacity>
        </Box>
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
