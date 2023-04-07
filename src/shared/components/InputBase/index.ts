import styled from 'styled-components';
import {border} from 'styled-system';

import {InputBaseProps} from './types';

export const InputBase = styled.input<InputBaseProps>`
  ${border}
  display: block;
  border-radius: 4px;
  margin: 0;
  background: none;
  width: 100%;
  font-size: 13px;
  padding: 22px;
  color: white;
  font-size: 18px;
  font-weight: 500px;
`;

export const TextareBase = styled.textarea<InputBaseProps>`
  ${border}
  display: block;
  border-radius: 4x;
  margin: 0;
  background: none;
  width: 100%;
  padding: 22px;
  color: white;
  font-size: 18px;
  font-weight: 500px;
`;
