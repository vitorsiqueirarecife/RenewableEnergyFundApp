import React from 'react';
import {TouchableOpacity} from 'react-native';
import Box from '../Box';
import {Props} from './types';

const Checkbox = ({onSelect, error, isSelected = false}: Props) => {
  return (
    <TouchableOpacity onPress={onSelect}>
      <Box width={23} height={23} border={error && '1px solid red'}>
        {!isSelected ? (
          <Box width={20} height={20} border="2px solid #E6E6E6" />
        ) : (
          <Box
            width={20}
            height={20}
            backgroundColor="#770FDF"
            border="2px solid #770FDF"
          />
        )}
      </Box>
    </TouchableOpacity>
  );
};

export default Checkbox;
