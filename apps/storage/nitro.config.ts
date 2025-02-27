//https://nitro.unjs.io/config
export default defineNitroConfig({
  runtimeConfig: {
    storageKey: process.env.STORAGE_KEY,
    s3Endpoint: process.env.STORAGE_S3_ENDPOINT,
    s3Region: process.env.STORAGE_S3_REGION,
    s3AccessKeyId: process.env.STORAGE_S3_ACCESS_KEY_ID,
    s3SecretAccessKey: process.env.STORAGE_S3_SECRET_ACCESS_KEY
    // lala: 'asd'
    // runtime config
  },
  routeRules: {
    '/avatar/**': {
      proxy: 'http://localhost:3902/avatars/**'
    },
    '/api/**': {
      cors: true,
      headers: {
        'Access-Control-Allow-Origin': 'http://localhost:3000',
        'Access-Control-Allow-Credentials': 'true'
      }
    }
  }
});
