import api from "../datasource/apit"

interface StudentInfo {
  studentClass: string,
  studentClassStartDateTime: Date;
  studentClassEndDateTime: Date;
  id: string,
}

export const StudentService = {
  async getStudentInfo(id: string): Promise<StudentInfo | Error> {
    try {
      const response = await api.get(`/student/mobile/${id}/`);
      if (!!response.data) {
        return {
          studentClass: response.data.student_class.id,
          studentClassStartDateTime: response.data.student_class.start_datetime,
          studentClassEndDateTime: response.data.student_class.end_datetime,
          id: response.data.id,
        };
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível encontrar suas informações');
  }
}
