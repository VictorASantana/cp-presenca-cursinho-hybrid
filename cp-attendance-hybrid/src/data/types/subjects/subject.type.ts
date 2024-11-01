export interface Subject {
  name: string;
  mainSubject: string;
  weekDateTimes: ClassDay[];
};

export interface ClassDay {
  weekDay: string;
  startTime: string;
  endTime: string;
}
