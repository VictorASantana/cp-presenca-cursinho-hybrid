interface Lesson {
  id: number;
  name: string;
  startDatetime: Date;
  endDatetime: Date;
  attendanceStartDatetime: Date;
  attendanceEnddatetime: Date;
  isAttendanceRegistrable: boolean;
  subject: string;
  student_class: string;
}
