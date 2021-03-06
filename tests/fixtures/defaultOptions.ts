import { SwaggerConfig } from './../../src/config';
export function getDefaultOptions(outputDirectory: string = '', entryFile: string = ''): SwaggerConfig {
  return {
    basePath: '/v1',
    description: 'Description of a test API',
    entryFile,
    host: 'localhost:3000',
    license: 'MIT',
    name: 'Test API',
    outputDirectory,
    securityDefinitions: {
      basic: {
        type: 'basic',
      },
      application: {
        type: 'oauth2',
        flow: 'application',
        tokenUrl: '/ats-api/auth/token',
        scopes: {
          user_read: 'user read',
          user_write: 'user_write',
        },
      },
      password: {
        type: 'oauth2',
        flow: 'password',
        tokenUrl: '/ats-api/auth/token',
        scopes: {
          user_read: 'user read',
          user_write: 'user_write',
        },
      },
      accessCode: {
        type: 'oauth2',
        flow: 'accessCode',
        tokenUrl: '/ats-api/auth/token',
        authorizationUrl: '/ats-api/auth/authorization',
        scopes: {
          user_read: 'user read',
          user_write: 'user_write',
        },
      },
      implicit: {
        type: 'oauth2',
        flow: 'implicit',
        authorizationUrl: '/ats-api/auth/authorization',
        scopes: {
          user_read: 'user read',
          user_write: 'user_write',
        },
      },
    },
    version: '1.0.0',
  };
}
