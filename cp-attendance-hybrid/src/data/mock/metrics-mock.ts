import { MetricsItem, TotalMetrics } from "../types/metrics/metrics-item.type";

export const metricsMock: MetricsItem[] = [
  {
    subject: 'Português', 
    percentage: 0.7
  },
  {
    subject: 'Matemática', 
    percentage: 0.5
  },
  {
    subject: 'Física', 
    percentage: 1
  },
  {
    subject: 'História', 
    percentage: 0.6
  },
  {
    subject: 'Geografia', 
    percentage: 1
  },
  {
    subject: 'Química', 
    percentage: 0.3
  },
  {
    subject: 'Filosofia', 
    percentage: 0.2
  },
  {
    subject: 'Biologia', 
    percentage: 0.9
  },
  {
    subject: 'Atualidades', 
    percentage: 0.6
  },

]

export const totalMetricsMock: TotalMetrics = {
  total: 50, 
  absences: 10,
}