import connection from './connection';
import IRegistration from '../interfaces/IRegistration';

class RegistrationsModel {
  private connection;

  constructor (conn = connection) {
    this.connection = conn;
  }

  public async getRegistrations() {
    try {
      const registrations = await this.connection.execute(
        'SELECT * FROM tb_registrations;',
      );
  
      return registrations[0];
    } catch (err) {      
      return null;
    }
  }

  public async createRegistration(registration: IRegistration) {
    try {
      const thereIsCpf: any = await this.connection.execute(
        'SELECT cd_registration FROM tb_registrations WHERE cd_cpf = ?;',
        [registration.cpf]
      );

      if (thereIsCpf[0].length > 0) {
        return 'CPF já cadastrado';
      } else {
        const response: any = await this.connection.execute(
          'INSERT INTO tb_registrations (nm_person, cd_cpf, cd_phone_number) VALUES (?, ?, ?);',
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
