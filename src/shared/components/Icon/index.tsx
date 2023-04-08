import React from 'react';
import MIcon from 'react-native-vector-icons/MaterialCommunityIcons';
import {IconProps, IconSizes} from './types';

MIcon.loadFont();

export const Icon = ({size, name, color}: IconProps) => (
  <MIcon name={name} size={IconSizes[size]} color={color} />
);
