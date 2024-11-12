import 'dotenv/config';

export default {
  expo: {
    name: "CpAttemdanceHybrid",
    slug: "cp-attendance-hybrid",
    version: "1.0.1",
    extra: {
      apiUrl: process.env.BASE_URL,
      eas: {
        projectId: "3d5a5420-7ddb-45f1-8bde-c917f8ccf245"
      }
    },
  },
};
