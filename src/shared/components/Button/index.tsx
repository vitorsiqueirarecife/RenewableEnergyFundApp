import {Props} from './types';
import React from 'react';
import Typography from '../Typography';
import ButtonBase from '../ButtonBase';

const Button = React.forwardRef<HTMLButtonElement, Props>((props, ref) => {
  const {children, ...rest} = props;

  return (
    <ButtonBase
      ref={ref}
      borderRadius="10px"
      width="200px"
      paddingY="10px"
      border="0px"
      {...rest}>
      <Typography fontSize="14px">{children}</Typography>
    </ButtonBase>
  );
});

export default Button;
