const registrationsQueries = {
  selectAllRegistrations: 'SELECT * FROM tb_registrations;',
  selectRegistration: 'SELECT cd_registration FROM tb_registrations WHERE cd_cpf = ?;',
  insertRegistration: 'INSERT INTO tb_registrations (nm_person, cd_cpf, cd_phone_number) VALUES (?, ?, ?);',
}

export default registrationsQueries;
