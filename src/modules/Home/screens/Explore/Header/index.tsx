import React from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../../../../../shared/components/Box';
import {Icon} from '../../../../../shared/components/Icon';
import Typography from '../../../../../shared/components/Typography';

const Header = () => {
  return (
    <Box display="flex" flexDirection="row" height={75} paddingX={20}>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-start"
        flex={1}>
        <TouchableOpacity>
          <Icon
            size="extraLarge1"
            color="#3a3a3a"
            name="account-circle-outline"
          />
        </TouchableOpacity>
      </Box>
      <Box display="flex" justifyContent="center" alignItems="center" flex={4}>
        <Typography fontWeight="600" color="#000000">
          Account: $1,457.23
        </Typography>
      </Box>
      <Box
        display="flex"
        justifyContent="center"
        alignItems="flex-end"
        flex={1}>
        <TouchableOpacity>
          <Icon size="extraLarge" color="#3a3a3a" name="bell-outline" />
        </TouchableOpacity>
      </Box>
    </Box>
  );
};

export default Header;
