import IRegistration from '../interfaces/IRegistration';
import { RegistrationsModel } from '../models';
import { validateCreateRegistration } from '../utils';

class RegistrationsService {
  private model: RegistrationsModel;

  constructor (model = new RegistrationsModel()) {
    this.model = model;
  }

  public async getRegistrations() {
    const registrations = await this.model.getRegistrations();

    return registrations;
  }

  public async createRegistration(registration: IRegistration) {
    const isValid = validateCreateRegistration(registration);    

    if (typeof isValid === 'string') {
      return isValid;
    }

    const response = await this.model.createRegistration(registration);

    return response;
  }
}

export default RegistrationsService;
