export interface User {
  name: string;
  email: string;
  studentClass: string;
  id: string;
  profilePhoto?: string;
}

export interface UserPhoto {
  uri: string;
  type: string;
  name: string;
}
