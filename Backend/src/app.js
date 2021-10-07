import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import { option } from './swaggerOptions'
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUiExpress from 'swagger-ui-express';
import taskRoutes from './routes/task'


const spect = swaggerJsdoc(option)

const app = express();

app.use(cors());

app.use(morgan('dev'))

app.use(express.json());

app.use(taskRoutes);

app.use('/docs', swaggerUiExpress.serve, swaggerUiExpress.setup(spect))

export default app;