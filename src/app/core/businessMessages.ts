const businessMessages = () => {
  return [
    {
      responseCode: 200,
      status: 'success',
      httpCode: 200,
    },
    {
      responseCode: 201,
      status: 'success',
      httpCode: 201,
    },
    {
      responseCode: 401,
      status: 'error',
      message: {
        localizedString: {
          en: 'Invalid token or expired',
          pt: 'Token inválido ou expirado',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 404,
      status: 'error',
      message: {
        localizedString: {
          en: 'The route you requested does not exist in this API',
          pt: 'A rota que você solicitou não existe nesta API',
        },
      },
      httpCode: 404,
    },
    {
      responseCode: 4011,
      status: 'error',
      message: {
        localizedString: {
          en: 'No token provided',
          pt: 'Token não fornecido',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 4012,
      status: 'error',
      message: {
        localizedString: {
          en: 'Token error',
          pt: 'Erro de token',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 4013,
      status: 'error',
      message: {
        localizedString: {
          en: 'Malformatted token',
          pt: 'Token mal-formado',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 4014,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on authenticating',
          pt: 'Erro ao autenticar',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 4015,
      status: 'error',
      message: {
        localizedString: {
          en: 'User not found',
          pt: 'Usuário não encontrado',
        },
      },
      httpCode: 404,
    },
    {
      responseCode: 4016,
      status: 'error',
      message: {
        localizedString: {
          en: 'Invalid user/password',
          pt: 'Usuário/senha inválidos',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 4017,
      status: 'error',
      message: {
        localizedString: {
          en: 'Registration failed',
          pt: 'Registro falhou',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 4018,
      status: 'error',
      message: {
        localizedString: {
          en: 'User already exists',
          pt: 'Usuário já existe',
        },
      },
      httpCode: 409,
    },
    {
      responseCode: 4019,
      status: 'error',
      message: {
        localizedString: {
          en: 'Invalid e-mail',
          pt: 'E-mail inválido',
        },
      },
      httpCode: 400,
    },
    {
      responseCode: 4020,
      status: 'error',
      message: {
        localizedString: {
          en: 'Tenant is required',
          pt: 'Tenant é obrigatório',
        },
      },
      httpCode: 401,
    },
    {
      responseCode: 5000,
      status: 'error',
      message: {
        localizedString: {
          en: 'Name, cnpj and e-mail are required',
          pt: 'Nome, cnpj e e-mail são obrigatórios',
        },
      },
      httpCode: 401,
    },
    {
      reseponseCode: 5001,
      status: 'error',
      message: {
        localizedString: {
          en: 'Tenant already exists',
          pt: 'Tenant já existe',
        },
      },
      httpCode: 409,
    },
    {
      responseCode: 5002,
      status: 'error',
      message: {
        localizedString: {
          en: 'Tenant not found',
          pt: 'Tenant não encontrado',
        },
      },
      httpCode: 404,
    },
  ];
};

export default businessMessages;
