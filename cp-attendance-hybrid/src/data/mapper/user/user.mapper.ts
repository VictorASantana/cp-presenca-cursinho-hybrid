import { User } from "@src/data/types/user/user.type";

export const userMapper = (userInfo): User => {
  return {
    name: userInfo.first_name + ' ' + userInfo.last_name,
    email: userInfo.email,
    studentClass: userInfo.student_class,
    id: userInfo.id,
  }
}
