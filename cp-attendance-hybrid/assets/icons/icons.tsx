import React from 'react';
import Icon from 'react-native-vector-icons/Entypo';

interface IconProps {
  name: string;
  size?: number;
  color?: string;
}

const CustomIcon: React.FC<IconProps> = ({ name, size = 24, color = 'black' }) => {
  return <Icon name={name} size={size} color={color} />;
};

export default CustomIcon;
