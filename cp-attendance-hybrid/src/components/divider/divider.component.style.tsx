import styled from 'styled-components/native';

interface DividerProps {
  height?: number; 
  color?: string; 
  marginVertical?: number; 
}

export const StyledDivider = styled.View<DividerProps>`
  height: ${({ height }) => (height ? `${height}px` : '1px')}; 
  background-color: ${({ color }) => (color ? color : '#e0e0e0')}; 
  margin-top: ${({ marginVertical }) => (marginVertical ? `${marginVertical}px` : '0')};
  margin-bottom: ${({ marginVertical }) => (marginVertical ? `${marginVertical}px` : '0')};
`;