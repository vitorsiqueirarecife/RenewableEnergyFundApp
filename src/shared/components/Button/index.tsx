import {Props, Style} from './types';
import React, {useMemo} from 'react';
import Typography from '../Typography';
import ButtonBase from '../ButtonBase';

const Button = ({children, variant, ...rest}: Props) => {
  const style: Style = useMemo(() => {
    if (variant === 'success') {
      return {
        backgroundColor: '#0FDF8F',
        borderColor: '#0FDF8F',
        textColor: '#FFFFFF',
      };
    }

    if (variant === 'secondary') {
      return {
        backgroundColor: '#FFFFFF',
        borderColor: '#CFCFCF',
        textColor: '#770FDF',
      };
    }

    return {
      backgroundColor: '#770FDF',
      borderColor: '#770FDF',
      textColor: '#FFFFFF',
    };
  }, [variant]);

  return (
    <ButtonBase
      height={58}
      display="flex"
      alignItems="center"
      justifyContent="center"
      borderRadius={4}
      width="100%"
      paddingY={10}
      border={1}
      backgroundColor={style.backgroundColor}
      borderColor={style.borderColor}
      {...rest}>
      <Typography fontSize={16} fontWeight="500" color={style.textColor}>
        {children}
      </Typography>
    </ButtonBase>
  );
};

export default Button;
