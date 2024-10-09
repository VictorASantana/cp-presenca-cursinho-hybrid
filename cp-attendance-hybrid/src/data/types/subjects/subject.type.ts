export interface Subject {
  name: string;
  teacher: string;
  weekDateTimes: ClassDay[];
};

export interface ClassDay {
  weekDay: string;
  startTime: string;
  endTime: string;
}
