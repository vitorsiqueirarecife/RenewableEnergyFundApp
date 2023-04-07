import {Props} from './types';

import {InputBase, TextareBase} from '../InputBase';
import Box from '../Box';
import Typography from '../Typography';
import React from 'react';

const Input = React.forwardRef<HTMLInputElement & HTMLTextAreaElement, Props>(
  (props, ref) => {
    const {title, error, multiline, rows, ...rest} = props;

    return (
      <Box display="flex" flexDirection="column" width="100%">
        <Box display="flex" flex="1" width="100%" position="relative">
          <Box
            position="absolute"
            top="-12px"
            left="10px"
            display="flex"
            paddingY="0px"
            paddingX="5px"
            margin="0px">
            <Typography fontSize="17px" fontWeight="500" letterSpacing="0px">
              {title}
            </Typography>
          </Box>
          {multiline ? (
            <TextareBase
              ref={ref}
              border={error ? '1px solid red' : '1px solid grey'}
              rows={rows}
              {...rest}
            />
          ) : (
            <InputBase
              ref={ref}
              border={error ? '1px solid red' : '1px solid grey'}
              {...rest}
            />
          )}
        </Box>
        {error && (
          <Box>
            <Typography color="red" fontSize="11px">
              Erro, o campo '{title}' é obrigatório!
            </Typography>
          </Box>
        )}
      </Box>
    );
  },
);

export default Input;
