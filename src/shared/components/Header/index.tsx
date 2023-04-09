import React from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../Box';
import {Icon} from '../Icon';
import {Props} from './types';

const Header = ({children, handleBack}: Props) => {
  return (
    <Box
      display="flex"
      flexDirection="row"
      justifyContent="center"
      alignItems="center"
      borderBottomWidth={1}
      borderBottomColor="#d6d6d6"
      height={90}>
      <Box flex={1} paddingLeft={20}>
        <TouchableOpacity onPress={handleBack}>
          <Icon size="large" color="#000000" name="arrow-left" />
        </TouchableOpacity>
      </Box>
      <Box
        display="flex"
        flex={3}
        flexDirection="row"
        justifyContent="center"
        alignItems="center">
        {children}
      </Box>
      <Box flex={1} paddingRight={20} />
    </Box>
  );
};

export default Header;
