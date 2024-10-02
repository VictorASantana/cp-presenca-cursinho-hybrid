export const lessonMapper = (lesson): Lesson => {
  return {
    id: lesson.id,
    name: lesson.name,
    startDatetime: new Date(lesson.start_datetime),
    endDatetime: new Date(lesson.end_datetime),
    attendanceStartDatetime: new Date(lesson.attendance_start_datetime),
    attendanceEnddatetime: new Date(lesson.attendance_end_datetime),
    isAttendanceRegistrable: lesson.is_attendance_registrable,
    subject: lesson.subject,
    student_class: lesson.student_class
  }
}
