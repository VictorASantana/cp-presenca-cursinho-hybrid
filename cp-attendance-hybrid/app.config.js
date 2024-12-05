import 'dotenv/config';

export default {
  expo: {
    name: "CP-Aluno",
    slug: "cp-attendance-hybrid",
    owner: "cpaluno",
    version: "1.0.1",
    android: {
      package: "com.cp.cpattendancehybrid"
    },
    extra: {
      apiUrl: process.env.HOMOL_URL || "https://110be7f4-a4e0-4869-b1c6-b31c3e146096-prod.e1-us-east-azure.choreoapis.dev/monitoramento-de-presenca/backend/v1.0",
      eas: {
        projectId: "3d5a5420-7ddb-45f1-8bde-c917f8ccf245"
      }
    },
  },
};
