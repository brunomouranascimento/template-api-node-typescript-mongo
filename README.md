# Template API em NodeJS com Typescript

## Ferramentas

- Express
- MongoDB
- Typescript
- Mongoose
- Teste unitários com JEST

# Introdução

Esse repositório tem o objetivo de auxiliar no ponto de partida da criação de uma API Node. A API foi desenvolvida visando boas práticas mas melhorias são sempre bem-vindas, caso achar que algo possa ser feito melhor, abra uma PR que irei avaliar.

# Estrutura da API

A API segue a lógica da imagem abaixo:
![img](./.github/prints/api-estrutura.png)

Abaixo será descrita a estrutura de pastas do código da API

Todo o código da API se encontra na pasta `./src`:

### Rotas

As requisições dos clientes são recebidas aqui, todas as rotas da aplicação são importadas no arquivo `./src/routes/routes.ts`. Conforme convenção, as rotas de cada entidade estão dentro da pasta `v1` para versionamento.

### Controllers

São as classes chamadas pelas rotas. Como boa prática um Controller deve possuir no máximo 5 métodos:

- store: Criação de entidades
- index: Pesquisar mais de uma entidade
- show: Pesquisar uma entidade singular
- update: Atualização de entidades
- destroy: Deleção de entidades

### Services

São as classes chamadas pelas controllers. São responsáveis pelas regras de negócio, não tendo acesso a camada de dados da aplicação. Essas classes possuem métodos com nomes correspondentes aos das controllers: store, update, destroy, show, index.

### Repositories

São as classes chamadas pelos services. É a camada de dados da aplicação responsável pela manipulação de banco de dados. Consultas, atualizações e exclusões devem ser feitas somente nessas classes. Essas classes possuem métodos com nomes correspondentes aos dos services: store, update, destroy, show, index.

Dentro das controllers não ocorrem validações, apenas o recebimento de dados do request, instanciação e execução dos `Services` onde estão as regras de negócio, e posteriormente o instanciamento dos `Repositories` que é a camada de acesso ao banco de dados.

### Middlewares

São as funções que estão entre uma requisição HTTP e a resposta final que o servidor envia de volta para o cliente. Neste projeto temos por exemplo o middleware de autenticação, que valida se a requisição possui um token, se ele é valido, etc.

### Testes

Dentro da pasta services de cada módulo há uma pasta contendo os arquivos de teste. Cada Service possui um arquivo de teste respectivo, sugiro sempre que for criar um novo service, iniciar criando-o e criar o teste respectivo antes de criar o Controller, rotas e etc. Seguindo os conceitos de TDD.

Para rodar todos os testes basta rodar o comando `npm run test`. Será gerado um arquivo `html` com o relatório dos testes dentro de `./coverage/lcov-report/index.html`.

Além do repositório do banco de dados, também são criados repositórios idênticos chamados de fakes. Esses fakeRepositories são utilizados como mock nos testes unitários dos `Services` e **devem** implementar as mesmas interfaces que o repositório do BD implementa. Essas interfaces estão localizadas dentro de `./src/modules/**/repositories/dto/I<entity>Repositoriy`

## core

Contém classes e funções importantes da api. Bem como as mensagens de retorno, localização, excessão.

### utils

Algumas funções úteis para serem utilizadas, num primeiro momento existe apenas uma função para validação de e-email.

## Instruções para rodar

### Crie um repositório a partir desse template

Após criar o repositório rode `npm install` para instalar todas as dependências.
**É necessário ter o node instalado, tenha a última versão LTS**

Após criar a base de dados e iniciá-la, crie o arquivo `.env` a partir do arquivo `.env.example` e preencha os dados referente ao banco de dados.

### Rode a API

Agora que o BD está criado e as dependências instaladas, rode `npm run dev` para rodar a API, o console irá mostrar essa mensagem:

```
✅ - API running on port 3333
➖ - Attempting to connect to Database
✅ - Connected to Database
```

## Build

Execute o comando `npm run build`. Será criado um repositório `build` na raiz do projeto.
