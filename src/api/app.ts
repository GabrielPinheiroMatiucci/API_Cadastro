import express, { Application } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { registrationsRoutes } from '../routes';

const app: Application = express();

app.use(cors());
app.use(bodyParser.json());
app.use(registrationsRoutes);

export default app;
