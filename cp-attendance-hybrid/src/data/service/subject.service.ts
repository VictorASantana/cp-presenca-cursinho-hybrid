import api from "../datasource/apit";
import { subjectMapper } from "../mapper/subject/subject.mapper";
import { Subject } from "../types/subjects/subject.type";

export const SubjectService = {
  async getSubjects(id: string): Promise<Subject[] | Error> {
    try {
      const response = await api.get(`/subject_with_details/${id}`);
      if (!!response.data) {
        const mappedResponse = response.data.map((subject: any) => subjectMapper(subject));
        return mappedResponse;
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Nao foi possivel listar as disciplinas');
  }
}
