import axios from "axios";
import api from "../datasource/apit"
import { lessonMapper } from "../mapper/lesson/lesson.mapper";

export const LessonRepository = {
  async listLessons(): Promise<Lesson[] | Error> {
    try {
      const response = await api.get('/mobile_lesson_with_details');
      if (response.data.length > 0) {
        const mappedResponse = response.data.map((lesson: any) => lessonMapper(lesson));
        return mappedResponse;
      } 
    } catch (err) {
      console.log(err);
    }
    return new Error('Não foi possível listar as aulas');
  }
}