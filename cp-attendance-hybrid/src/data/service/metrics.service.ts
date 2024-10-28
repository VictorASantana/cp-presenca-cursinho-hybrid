import api from "../datasource/apit";
import { metricsMapper } from "../mapper/metrics/metrics.mapper";
import { MetricsItem } from "../types/metrics/metrics-item.type";

export const MetricsService = {
  async listAttendances(id: number): Promise<MetricsItem[] | Error> {
    try {
      const response = await api.get(`/attendance/${id}`);
      if (!!response.data) {
        const metrics = response.data.map((attendance: any) => metricsMapper(attendance));
        return metrics;
      }
    } catch (err)  {
      console.log(err);
    }
    return Error("Não foi possivel encontrar seus registros");
  }
}