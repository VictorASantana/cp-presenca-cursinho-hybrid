import { AttendanceInfo, MetricsItem } from "@src/data/types/metrics/metrics-item.type"

export const metricsMapper = (metrics): MetricsItem => {
  return {
    subject: metrics.subject,
    status: metrics.status,
  };
}
