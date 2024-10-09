import { Theme } from "assets/theme/theme";
import { ScheduleCardHourStyled, ScheduleCardStyled, ScheduleCardTextStyled } from "./schedule-card.component.style";
import React from "react";
import { mapColor, mapSubject } from "assets/utils/utils";

interface ScheduleCardProps {
  subject: string;
  startTime: string;
  endTime: string;
  cardHeight: number;
  cardTop: number; 
}

export const ScheduleCard: React.FC<ScheduleCardProps> = props => {
  return (
    <ScheduleCardStyled color={mapColor(props.subject)} cardHeight={props.cardHeight} cardTop={props.cardTop}>
      <ScheduleCardHourStyled>{props.startTime}</ScheduleCardHourStyled>
      <ScheduleCardTextStyled>{mapSubject(props.subject).slice(0, 3)}</ScheduleCardTextStyled>
      <ScheduleCardHourStyled>{props.endTime}</ScheduleCardHourStyled>
    </ScheduleCardStyled>
  );
}
