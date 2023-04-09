import {Props, Style} from './types';
import React, {useMemo} from 'react';
import Typography from '../Typography';
import ButtonBase from '../ButtonBase';
import {Icon} from '../Icon';
import Box from '../Box';

const Button = ({
  children,
  variant,
  fontSize = 16,
  fontWeight = '500',
  iconName,
  height = 58,
  paddingY = 10,
  ...rest
}: Props) => {
  const style: Style = useMemo(() => {
    if (variant === 'success') {
      return {
        backgroundColor: '#0FDF8F',
        borderColor: '#0FDF8F',
        textColor: '#FFFFFF',
        iconColor: '#FFFFFF',
      };
    }

    if (variant === 'secondary') {
      return {
        backgroundColor: '#FFFFFF',
        borderColor: '#CFCFCF',
        textColor: '#770FDF',
        iconColor: '#770FDF',
      };
    }

    if (variant === 'tertiary') {
      return {
        backgroundColor: '#F7EFFF',
        borderColor: '#F7EFFF',
        textColor: '#770FDF',
        iconColor: '#770FDF',
      };
    }

    if (variant === 'transparent') {
      return {
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        textColor: '#A0A0A0',
        iconColor: '#A0A0A0',
      };
    }

    return {
      backgroundColor: '#770FDF',
      borderColor: '#770FDF',
      textColor: '#FFFFFF',
      iconColor: '#FFFFFF',
    };
  }, [variant]);

  return (
    <ButtonBase
      height={height}
      display="flex"
      flexDirection="row"
      alignItems="center"
      justifyContent="center"
      borderRadius={4}
      width="100%"
      paddingY={paddingY}
      border={1}
      backgroundColor={style.backgroundColor}
      borderColor={style.borderColor}
      {...rest}>
      {iconName && (
        <Box marginX={2}>
          <Icon size="medium" color={style.iconColor} name={iconName} />
        </Box>
      )}
      <Typography
        fontSize={fontSize}
        fontWeight={fontWeight}
        color={style.textColor}>
        {children}
      </Typography>
    </ButtonBase>
  );
};

export default Button;
