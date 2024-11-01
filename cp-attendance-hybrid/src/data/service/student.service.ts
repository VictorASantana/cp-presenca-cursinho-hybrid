import api from "../datasource/apit"

interface StudentInfo {
  studentClass: string,
  id: string,
}

export const StudentService = {
  async getStudentInfo(id: string): Promise<StudentInfo | Error> {
    try {
      const response = await api.get(`/student/mobile/${id}`);
      if (!!response.data) {
        return {
          studentClass: response.data.student_class,
          id: response.data.id,
        };
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Não foi possível encontrar suas informações');
  }
}
