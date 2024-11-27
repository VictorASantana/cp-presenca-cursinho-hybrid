import { User } from "@src/data/types/user/user.type";
import { HOMOL_URL, BASE_URL, TEST_URL } from '@env';

export const userMapper = (userInfo): User => {
  return {
    name: userInfo.first_name + ' ' + userInfo.last_name,
    email: userInfo.email,
    studentClass: userInfo.student_class,
    id: userInfo.id,
    profilePhoto: TEST_URL + userInfo.profile_photo
  }
}
