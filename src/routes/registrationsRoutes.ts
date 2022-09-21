import { Request, Response, Router } from 'express';
import { RegistrationsController } from '../controllers';
import { RegistrationsModel, connection } from '../models';
import { RegistrationsService } from '../services';

const registrationsRoutes = Router();
const registrationsModel = new RegistrationsModel(connection);
const registrationsService = new RegistrationsService(registrationsModel);
const registrationsController = new RegistrationsController(registrationsService);

registrationsRoutes.get('/registrations', async (req: Request, res: Response) => {
  const response = await registrationsController.getRegistrations(req, res);

  return response;
});

registrationsRoutes.post('/registrations', async (req: Request, res: Response) => {
  const response = await registrationsController.createRegistration(req, res);

  return response;
});

export default registrationsRoutes;
