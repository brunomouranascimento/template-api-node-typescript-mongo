const dataMessages = () => {
  return [
    {
      responseCode: 1000,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on findind user(s)',
          pt: 'Erro ao encontrar usuário(s)',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 1001,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on creating user(s)',
          pt: 'Erro ao criar usuário(s)',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 1002,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on removing user(s)',
          pt: 'Erro ao remover usuário(s)',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 2000,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on finding tenant(s)',
          pt: 'Erro ao encontrar tenant(s)',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 2001,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on creating tenant(s)',
          pt: 'Erro ao criar tenant(s)',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 2002,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on updating tenant',
          pt: 'Erro ao atualizar tenant',
        },
      },
      httpCode: 500,
    },
    {
      responseCode: 2003,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on removing tenant',
          pt: 'Erro ao remover tenant',
        },
      },
      httpCode: 500,
    },
  ];
};

export default dataMessages;
