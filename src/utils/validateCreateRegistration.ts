import IRegistration from '../interfaces/IRegistration';

type typesReturn = boolean | string;
const invalidText = 'Nome e CPF precisam ser preenchidos e estar no formato correto.';

function validateCreateRegistration(registration: IRegistration): typesReturn {
  const { name, cpf } = registration;

  if (!cpf || !name) return invalidText;

  if (name.trim() === '' || cpf.trim() === '') {
    return invalidText;
  }

  if (cpf.length !== 11) return invalidText;

  return true;
}

export default validateCreateRegistration;
