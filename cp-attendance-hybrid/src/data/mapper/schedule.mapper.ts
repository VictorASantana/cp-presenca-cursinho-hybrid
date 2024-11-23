import { ScheduleItem } from "../types/schedule-item.type"
import { Subject } from "../types/subjects/subject.type"

export const ScheduleMapper = (subject: Subject): ScheduleItem[] => {
  const result = subject.weekDateTimes.map((date) => {
    return {
      weekDay: date.weekDay,
      startTime: date.startTime,
      endTime: date.endTime,
      subject: subject.mainSubject, 
      name: subject.name
    }
  })
  return result;
}
