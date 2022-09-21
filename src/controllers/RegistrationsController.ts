import { Request, Response } from 'express';
import { RegistrationsService } from '../services';
import { statusHTTP } from '../utils';

class RegistrationsController {
  private service: RegistrationsService;
  private errorMessage: object;

  constructor (service = new RegistrationsService()) {
    this.service = service;
    this.errorMessage = { message: 'Internal Server Error' };
  }

  public async getRegistrations(_req: Request, res: Response) {
    try {
      const registrations = await this.service.getRegistrations();

      if (!registrations) {
        return res.status(statusHTTP.serverError).json(this.errorMessage);
      }

      return res.status(statusHTTP.ok).json(registrations);
    } catch (err) {
      console.error(err);      

      return res.status(statusHTTP.serverError).json(this.errorMessage);
    }
  }

  public async createRegistration(req: Request, res: Response) {
    try {
      const response = await this.service.createRegistration({
        name: req.body.name,
        cpf: req.body.cpf,
        phoneNumber: req.body.phoneNumber,
      });      

      if (!response) {
        return res.status(statusHTTP.serverError).json(this.errorMessage);
      }

      if (typeof response === 'string') {
        return res.status(statusHTTP.badRequest).json(response);
      }

      return res.status(statusHTTP.created).end();
    } catch (err) {
      console.error(err);

      return res.status(statusHTTP.serverError).json(this.errorMessage);
    }
  }
}

export default RegistrationsController;
