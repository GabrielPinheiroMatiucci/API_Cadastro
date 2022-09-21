import IRegistration from '../interfaces/IRegistration';

type typesReturn = boolean | string;
const invalidText = 'Nome, CPF e telefone precisam ser preenchidos e estar no formato correto.';

function validateCreateRegistration(registration: IRegistration): typesReturn {
  const { name, cpf, phoneNumber } = registration;

  if (!cpf || !name || !phoneNumber) return invalidText;

  if (name.trim() === '' || cpf.trim() === '' || phoneNumber.trim() === '') {
    return invalidText;
  }

  if (cpf.length !== 11) return invalidText;

  if (phoneNumber.length < 10 || phoneNumber.length > 11) return invalidText;;

  return true;
}

export default validateCreateRegistration;
