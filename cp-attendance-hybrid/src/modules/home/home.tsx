import { GlobalContainer, Title } from "assets/utils/global.style"

import { ScreenProps } from '../../navigation/Routes';
import { BaseButton } from "@src/components/button/base-button.component";
import { ClassCard } from "@src/components/card/class-card/class-card.component";

export const Home: React.FC<ScreenProps<'Home'>> = ({navigation, route}) => {
  return (
    <GlobalContainer>
      <Title>{'Home'}</Title>
      <BaseButton text="Click"/>
      <ClassCard title="Título" activate={false}/>
    </GlobalContainer>
  );
}