import express from 'express';
import cors from 'cors';
import 'dotenv/config';
import swaggerUi from 'swagger-ui-express';
import { swaggerSpec } from './shared/swagger/docs';

import './shared/services/TranslationsYup';
import { router } from './routes';

const server = express();

server.use(cors({
    origin: process.env.ENABLED_CORS?.split(';') || [],
}));

server.use(express.json());

server.use(router);

server.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

export { server };
