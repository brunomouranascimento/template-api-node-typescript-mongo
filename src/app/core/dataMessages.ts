const dataMessages = () => {
  return [
    {
      responseCode: 1000,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on findind register(s)',
          pt: 'Erro ao encontrar registro(s)'
        }
      },
      httpCode: 500
    },
    {
      responseCode: 1001,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on creating register(s)',
          pt: 'Erro ao criar registro(s)'
        }
      },
      httpCode: 500
    },
    {
      responseCode: 1002,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on removing register(s)',
          pt: 'Erro ao remover registro(s)'
        }
      },
      httpCode: 500
    },
    {
      responseCode: 1003,
      status: 'error',
      message: {
        localizedString: {
          en: 'Error on updating register',
          pt: 'Erro ao atualizar registro'
        }
      },
      httpCode: 500
    }
  ]
}

export default dataMessages
