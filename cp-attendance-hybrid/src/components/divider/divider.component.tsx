import React from 'react';
import { StyledDivider } from './divider.component.style';

interface DividerProps {
  height?: number; 
  color?: string; 
  marginVertical?: number; 
}

const Divider: React.FC<DividerProps> = ({ height, color, marginVertical }) => {
  return <StyledDivider height={height} color={color} marginVertical={marginVertical} />;
};

export default Divider;