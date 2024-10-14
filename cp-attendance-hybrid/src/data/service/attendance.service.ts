import AsyncStorage from "@react-native-async-storage/async-storage";
import api from "../datasource/apit"

export const AttendanceService = {
  async checkPasskey(passkey: string, lessonId: string, studentId: string): Promise<string | Error> {
    try {
      const response = await api.post('attendance/check-passkey', { lesson_id: lessonId, student_id: studentId, passkey });
      if (response) { 
        AsyncStorage.setItem(lessonId, 'present');
        return 'Presença marcada com sucesso!';
      }
    } catch (err) {
      console.log(err);
    }
    return Error('Nao foi possivel registrar sua presença!');
  }
}
