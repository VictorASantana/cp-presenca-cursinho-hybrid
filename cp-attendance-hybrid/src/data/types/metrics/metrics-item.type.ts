export interface MetricsItem {
  subject: string;
  status: string;
}

export interface TotalMetrics {
  total: number;
  absences: number;
}

export interface AttendanceInfo {
  subject: string;
  total: number;
  absences: number;
}
