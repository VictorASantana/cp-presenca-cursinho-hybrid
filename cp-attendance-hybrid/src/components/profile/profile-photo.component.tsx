import Icon from "react-native-vector-icons/Ionicons";
import { ProfilePhotoButton } from "./profile-photo.component.style";
import { Theme } from "assets/theme/theme";

interface ProfilePhotoProps {
  onPress: () => void;
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = props => {
  return (
    <ProfilePhotoButton size={72} onPress={props.onPress}>
      <Icon name="person" size={32} color={Theme.Colors.white}/>
    </ProfilePhotoButton>
  );
}
