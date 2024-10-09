import { Progress, ProgressBarContainer } from "./bar-graph.component.styled";

interface ProgressBarProps {
  progress: number; // Valor de progresso de 0 a 100
  height?: number;
  borderRadius?: number;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  height = 20,
  borderRadius = 10,
}) => {
  return (
    <ProgressBarContainer height={height} borderRadius={borderRadius}>
      <Progress progress={progress} />
    </ProgressBarContainer>
  );
};
