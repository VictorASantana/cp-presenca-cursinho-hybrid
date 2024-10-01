import Icon from "react-native-vector-icons/Ionicons";
import { ProfilePhotoButton } from "./profile-photo.component.style";
import { Theme } from "assets/theme/theme";

interface ProfilePhotoProps {
  onPress?: () => void;
  size?: number; 
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = props => {
  return (
    <ProfilePhotoButton size={props.size ?? 72} onPress={props.onPress}>
      <Icon name="person" size={props.size ? props.size/2.5 : 32} color={Theme.Colors.white}/>
    </ProfilePhotoButton>
  );
}
