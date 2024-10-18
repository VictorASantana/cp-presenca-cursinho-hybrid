import { ClassDay, Subject } from "@src/data/types/subjects/subject.type"

export const subjectMapper = (subject): Subject => {
  return {
    name: subject.subject.name,
    mainSubject: subject.subject.main_subject,
    weekDateTimes: subject.regular_datetimes.map((date: any) => classDayMapper(date)),
  }
}

export const mainSubjectMapper = (main_subject: string) => {
  switch (main_subject) {
    case "MT": 
      return "Matematica";
    case "PT": 
      return "Portugues";
    case "PH":
      return "Fisica";
    case "CH":
      return "Quimica";
    case "BI":
      return "Biologia";
    case "HI":
      return "Historia";
    case "GE":
      return "Geografia";
    case "PL":
      return "Filosofia"
    default:
      return "Atualidades"
  }
}

const classDayMapper = (regular_datetime): ClassDay => {
  return {
    weekDay: weekDayMapper(regular_datetime.day_of_week),
    startTime: formatDateToHHMM(new Date(regular_datetime.start_datetime)),
    endTime: formatDateToHHMM(new Date(regular_datetime.end_datetime))
  }
}

export function formatDateToHHMM(date: Date): string {
  const hours: string = String(date.getHours()).padStart(2, '0'); 
  const minutes: string = String(date.getMinutes()).padStart(2, '0'); 
  return `${hours}:${minutes}`; 
}

const weekDayMapper = (weekDay: number): string => {
  switch (weekDay) {
      case 0: return 'Segunda-Feira'
      case 1: return 'Terça-Feira'
      case 2: return 'Quarta-Feira'
      case 3: return 'Quinta-Feira'
      case 4: return 'Sexta-Feira'
      case 5: return 'Sábado'
      case 6: return 'Domingo'
      default: return 'Dia da semana não especificado'
  }
}