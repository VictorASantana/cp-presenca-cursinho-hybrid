import { Theme } from "assets/theme/theme";
import styled from "styled-components/native";

interface ProfilePhotoButtonProps {
  size: number;
}

export const ProfilePhotoButton = styled.TouchableOpacity<ProfilePhotoButtonProps>`
  background-color: ${Theme.Colors.gray};
  height: ${props => props.size}px;
  width: ${props => props.size}px;
  border-radius: ${props => props.size / 2}px;
  justify-content: center;
  align-items: center;
`;
