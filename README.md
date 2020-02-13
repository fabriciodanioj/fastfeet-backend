<h1 align="center">
  <img alt="Fastfeet" title="Fastfeet" src="https://raw.githubusercontent.com/Rocketseat/bootcamp-gostack-desafio-02/master/.github/logo.png" width="300px" />
</h1>

<p align="center">
  <a href="#sobre-o-projeto">Sobre o projeto</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#rocket-Tecnologias">Tecnologias</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#warning-Pré-requisitos">Pré-requisitos</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-instalação">Instalação</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#memo-rotas">Rotas</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#licença">Licença</a>
</p>

### Sobre o projeto

Um app para uma transportadora fictícia, o FastFeet.

### :rocket: **Tecnologias**

-  [Express](https://expressjs.com/)
-  [Node.js](https://nodejs.org)
-  [Cors](https://github.com/expressjs/cors)
-  [Dotenv](https://github.com/motdotla/dotenv/)
-  [Jsonwebtoken](https://github.com/auth0/node-jsonwebtoken)
-  [node-postgres](https://www.npmjs.com/package/pg)
-  [pg-hstore](https://www.npmjs.com/package/pg-hstore)
-  [Sequelize](https://www.npmjs.com/package/sequelize)
-  [sequelize-cli](https://www.npmjs.com/package/sequelize-cli)
-  [Docker](https://www.docker.com/)
-  [yup](https://www.npmjs.com/package/yup)
-  [Bcrypt](https://github.com/kelektiv/node.bcrypt.js)
-  [Nodemon](https://nodemon.io/)
-  [Prettier](https://prettier.io/)
-  [Sucrase](https://github.com/alangpierce/sucrase)
-  [ESLint](https://www.npmjs.com/package/eslint)


## :warning: Pré-requisitos
Para instalar essa aplicação é preciso ter o [Yarn](https://yarnpkg.com), o [Node na versão LTS](https://nodejs.org/en/), o [git](https://git-scm.com) e o [Docker](https://www.docker.com) instalados na sua máquina.


## :information_source: Instalação
```bash
# Clone esse repositorio
$ git clone https://github.com/fabriciodanioj/fastfeet-backend.git

# Entre na pasta do projeto
$ cd fastfeet-backend

# Instale as dependencias
$ yarn

# Inicie o servidor que irá rodar na porta 3333
$ yarn dev
```

### **Funcionalidades**

## **1. Autenticação**

Permitir que um usuário se autentique na aplicação utilizando e-mail e uma senha.

- A autenticação será feita utilizando JWT.
- Validação dos dados de entrada realizada com yup;

## 2. Gestão de destinatários

Permitir que destinatários sejam mantidos (cadastrados/atualizados) na aplicação, com os seguintes campos: O **nome** do destinatário e campos de endereço: **rua**, **número**, **complemento**, **estado**, **cidade** e **CEP**.

Para guardar informações do destinatário sera usada uma tabela no banco de dados chamada `recipients`.

O cadastro de destinatários só pode ser feito por administradores autenticados na aplicação.

O destinatário não pode se autenticar no sistema, ou seja, não possui senha.

## :memo: Rotas

### base_url -> `http://localhost:3333`

Rotas que não necessita estar autenticado

- [x] Autenticação
- POST `/session` -> Faz o login e recebe o token jwt para as rotas autenticadas

---

Rotas que necessita estar autenticado

- [x] Destinatários
- POST `/recipient` -> Cria um novo destinatário
- UPDATE `/recipient/:id` -> Atualiza um destinatário
- DELETE `/recipient/:id` -> Deleta um destinatário
- GET `/recipient` -> Lista os destinatários criados

### Licença

Esse projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE.md) para mais detalhes.

---

Feito com ♥ por Fabricio Dani :wave: [LinkedIn!](https://www.linkedin.com/in/fabricio-dani-373469176/)

[https://github.com/fabriciodanioj](https://github.com/fabriciodanioj)
