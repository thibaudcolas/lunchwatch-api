import path from 'path';
import swaggerJSDoc from 'swagger-jsdoc';

/**
 * Swagger definition.
 */
const swaggerDefinition = {
  info: {
    title: process.env.APP_NAME,
    version: process.env.APP_VERSION,
    description: process.env.APP_DESCRIPTION,
  },
  host: `${process.env.APP_HOST}:${process.env.APP_PORT}`,
  basePath: '/',
};

/**
 * Options for the swagger docs.
 */
const swaggerOptions = {
  // import swaggerDefinitions
  swaggerDefinition,
  // path to the API docs
  apis: [
    path.join(__dirname, '/../routes.js'),
    path.join(__dirname, '/../docs/*.js'),
    path.join(__dirname, '/../docs/*.yml'),
    path.join(__dirname, '/../docs/*.yaml'),
  ],
};

/**
 * Initialize swagger-jsdoc.
 */
const swaggerSpec = swaggerJSDoc(swaggerOptions);

export default swaggerSpec;
