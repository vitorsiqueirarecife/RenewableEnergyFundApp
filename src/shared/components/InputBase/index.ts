import styled from 'styled-components';
import {border} from 'styled-system';
import {TextInput} from 'react-native';
import {InputBaseProps} from './types';

export const InputBase = styled(TextInput)<InputBaseProps>`
  ${border}
  background-color: #e8e8e8;
  padding-left: 10px;
  padding-right: 10px;
  border-radius: 4px;
`;
