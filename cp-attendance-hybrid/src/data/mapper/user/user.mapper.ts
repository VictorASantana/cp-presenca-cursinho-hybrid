export const userMapper = (user): User => {
  return {
    fullname: user.full_name,
    studentClass: user.student_class,
    id: user.id
  }
}
