# Api CRUD NestJs and Prisma
 



## Stack utilizada
NestJS + Typescript + Prisma + Mysql



## Requisitos e Instalação

- [Node](https://nodejs.org/)
- [MySQL](https://www.mysql.com)

### Para instalar NestJS, Prisma.
```
npm i -g @nestjs/cli prisma --save-dev
```

## Instalação do projeto

### Criar um banco de dados MySQL. Criar um arquivo ".env" e inserir as seguintes configurações dentro do arquivo:
```
DATABASE_URL="mysql://user:password@localhost:5432/database-name-example"
```

### Criando as migrations 
```
npx prisma migrate dev
```

Instalando pacotes após entrar na pasta do projeto
```
npm install
```

### Iniciando o projeto
```
npm run start:dev
```

## Documentação da API

### Endpoints

| Método | Rota | Descrição |
| -------|-------|--------- |
| GET    | /user      | Find all|
| GET    | /user/:id | Find one|
| POST   | /user | Create user|
| PUT    | /user/:id | Update user|
| DELETE | /user/:id | Delete user|


Payload example

New User
```json
{
    "name": "name",
    "birthdate": "mouth-day-year",
    "document": "12345678978",
    "acceptedTerms": true,
    "zipcode": "zipcode"
}
```
Edit User - 
```json
{
  "name": "name",
  "birthdate": "mouth-day-year",
  "document": "12345678978",
  "acceptedTerms": true,
  "zipcode": "zipcode",
  "street": "street",
  "neighborhood": "neighborhood",
  "city": "city",
  "state": "state",
}
```

### Melhorias futuras
- Autenticação

### Author

| [![github/emersondp07](https://avatars.githubusercontent.com/u/91437391?v=4)](https://github.com/emersondp07 "Checkout github") |
|---|
| [Emerson Dantas](https://github.com/emersondp07) |