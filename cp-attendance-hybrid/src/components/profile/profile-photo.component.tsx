import Icon from "react-native-vector-icons/Ionicons";
import { ProfilePhotoButton } from "./profile-photo.component.style";
import { Theme } from "assets/theme/theme";
import { useUser } from "@src/context/user.context";
import { Image } from "react-native";

interface ProfilePhotoProps {
  onPress?: () => void;
  size?: number; 
}

export const ProfilePhoto: React.FC<ProfilePhotoProps> = props => {
  const user = useUser();
  return (
    <ProfilePhotoButton size={props.size ?? 72} onPress={props.onPress}>
      {user.user?.profilePhoto ? 
        <Image source={{ uri: user.user.profilePhoto }} style={{ height: props.size ?? 72, width: props.size ?? 72, borderRadius: props.size ? props.size / 2 : 36 }}/> :
        <Icon name="person" size={props.size ? props.size/2.5 : 32} color={Theme.Colors.white}/>
      }
    </ProfilePhotoButton>
  );
}
