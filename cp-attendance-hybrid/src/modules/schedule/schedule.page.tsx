import React from "react";
import { Cell, HeaderCell, HeaderRow, Row, TableContainer,  } from "./schedule.page.style";
import { ScheduleItem } from "@src/data/types/schedule-item.type";
import { scheduleMock } from "@src/data/mock/schedule.mock";
import { ScheduleCard } from "@src/components/card/schedule-card/schedule-card.component";
import { SafeAreaView } from "react-native-safe-area-context";
import { ScrollView } from "react-native";
import { Title } from "assets/utils/global.style";

const CELL_HEIGHT = 100;
const TOTAL_HOURS = 12; 

const createEmptyTable = (days: string[], hours: string[]) => {
  const table: { [key: string]: { [key: string]: ScheduleItem[] } } = {};
  hours.forEach(hour => {
    table[hour] = {};
    days.forEach(day => {
      table[hour][day] = [];
    });
  });
  return table;
};

const getCellTop = (startTime: string) => {
  const [hours, minutes] = startTime.split(':').map(Number);
  const totalMinutes = hours * 60 + minutes;
  return ((totalMinutes - 720) / 60) * CELL_HEIGHT;
};

const getCardHeight = (startTime: string, endTime: string) => {
  const [startHours, startMinutes] = startTime.split(':').map(Number);
  const [endHours, endMinutes] = endTime.split(':').map(Number);
  const startTotalMinutes = startHours * 60 + startMinutes;
  const endTotalMinutes = endHours * 60 + endMinutes;
  return ((endTotalMinutes - startTotalMinutes) / 60) * CELL_HEIGHT;
};

const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex'];
const hours = ['15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00', '00:00'];

export const Schedule: React.FC = () => {

  const table = createEmptyTable(days, hours);

  const scheduleItems = scheduleMock;

  scheduleItems.forEach(item => {
    const timeKey = hours.find(hour => hour.startsWith(item.startTime.split(':')[0]));
    if (timeKey) {
      table[timeKey][item.weekDay].push(item);
    }
  });

  return (
    <ScrollView>
      <SafeAreaView />
      <Title>{'Grade Horária'}</Title>
      <TableContainer>
        <HeaderRow>
          <HeaderCell />
          {days.map((day) => (
            <HeaderCell key={day}>{day}</HeaderCell>
          ))}
        </HeaderRow>
        {hours.map((hour) => (
          <Row key={hour}>
            <HeaderCell>{hour}</HeaderCell>
            {days.map((day) => (
              <Cell key={`${hour}-${day}`}>{
                table[hour][day].map((item, index) => (
                  <ScheduleCard 
                    key={index}
                    subject={item.subject}
                    startTime={item.startTime}
                    endTime={item.endTime}
                    cardHeight={getCardHeight(item.startTime, item.endTime)}
                    cardTop={getCellTop(item.startTime)}
                  />
                ))
              }</Cell>
            ))}
          </Row>
        ))}
    </TableContainer>
  </ScrollView>  
  );
}