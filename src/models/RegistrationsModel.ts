import connection from './connection';
import IRegistration from '../interfaces/IRegistration';
import { registrationsQueries as queries } from '../queries';

class RegistrationsModel {
  private connection;

  constructor (conn = connection) {
    this.connection = conn;
  }

  public async getRegistrations() {
    try {
      const registrations = await this.connection.execute(
        queries.selectAllRegistrations,
      );
  
      return registrations[0];
    } catch (err) {      
      return null;
    }
  }

  public async createRegistration(registration: IRegistration) {
    try {
      const thereIsCpf: any = await this.connection.execute(
        queries.selectRegistration,
        [registration.cpf]
      );

      if (thereIsCpf[0].length > 0) {
        return 'CPF já cadastrado';
      } else {
        const response: any = await this.connection.execute(
          queries.insertRegistration,
          [registration.name, registration.cpf, registration.phoneNumber],
        );

        return response[0].affectedRows === 1 ? true : null;
      }
    } catch (err) {      
      return null;      
    }
  }
}

export default RegistrationsModel;
