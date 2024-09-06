import { GlobalContainer, Title } from "assets/utils/global.style"
import { BaseButton } from "@src/components/button/base-button.component";
import { ClassCard } from "@src/components/card/class-card/class-card.component";

export const Home: React.FC = () => {
  return (
    <GlobalContainer>
      <Title>{'Home'}</Title>
      <BaseButton text="Click"/>
      <ClassCard title="Título" activate={false}/>
    </GlobalContainer>
  );
}