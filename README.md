# Cities API

API RESTful para gerenciamento de cidades e pessoas, com autenticação JWT. Desenvolvida com Node.js, TypeScript, Express e Knex.

> 🇺🇸 [Read in English](./README.en.md)

---

## Tecnologias

- **Node.js** + **TypeScript**
- **Express** — framework HTTP
- **Knex** — query builder para banco de dados
- **SQLite3** — banco de dados em desenvolvimento/testes
- **PostgreSQL** — banco de dados em produção
- **JWT** — autenticação via token
- **Bcryptjs** — hash de senhas
- **Yup** — validação de dados
- **Jest** + **Supertest** — testes automatizados
- **CORS** — controle de origens permitidas

---

## Pré-requisitos

- Node.js 18+
- npm

---

## Instalação

```bash
# Clone o repositório
git clone https://github.com/AlvesKZ/cities-api.git
cd cities-api

# Instale as dependências
npm install
```

---

## Variáveis de Ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
PORT=3003
NODE_ENV=development
JWT_SECRET=sua_chave_secreta

# CORS — origens permitidas, separadas por ponto e vírgula
ENABLED_CORS=https://seusite.com;https://outrosite.com

# Apenas para produção (PostgreSQL)
DATABASE_URL=postgresql://usuario:senha@host/banco
```

---

## Scripts

| Comando | Descrição |
|---|---|
| `npm run dev` | Inicia o servidor em modo desenvolvimento com hot-reload |
| `npm run build` | Compila o TypeScript para JavaScript |
| `npm start` | Inicia o servidor a partir do build compilado |
| `npm test` | Executa os testes automatizados |
| `npm run knex:migrate` | Executa as migrations do banco de dados |
| `npm run knex:rollback` | Desfaz a última migration |
| `npm run knex:rollback-all` | Desfaz todas as migrations |
| `npm run knex:seed` | Popula o banco com dados iniciais |

---

## Banco de Dados

### Migrations e Seeds (desenvolvimento)

```bash
npm run knex:migrate
npm run knex:seed
```

---

## Endpoints

### Autenticação

| Método | Rota | Descrição |
|---|---|---|
| `POST` | `/cadastrar` | Cria um novo usuário |
| `POST` | `/entrar` | Realiza login e retorna o token JWT |

> Todos os demais endpoints exigem o token JWT no header: `Authorization: Bearer <token>`

---

### Cidades

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/cidades` | Lista todas as cidades (paginado) |
| `POST` | `/cidades` | Cria uma nova cidade |
| `GET` | `/cidades/:id` | Busca uma cidade pelo ID |
| `PUT` | `/cidades/:id` | Atualiza uma cidade pelo ID |
| `DELETE` | `/cidades/:id` | Remove uma cidade pelo ID |

---

### Pessoas

| Método | Rota | Descrição |
|---|---|---|
| `GET` | `/pessoas` | Lista todas as pessoas (paginado) |
| `POST` | `/pessoas` | Cria uma nova pessoa |
| `GET` | `/pessoas/:id` | Busca uma pessoa pelo ID |
| `PUT` | `/pessoas/:id` | Atualiza uma pessoa pelo ID |
| `DELETE` | `/pessoas/:id` | Remove uma pessoa pelo ID |

---

## Estrutura do Projeto

```
src/
└── server/
    ├── controllers/       # Lógica dos endpoints (validação + resposta)
    ├── database/
    │   ├── knex/          # Configuração e ambiente do Knex
    │   ├── migrations/    # Migrations do banco de dados
    │   ├── models/        # Interfaces dos modelos
    │   ├── providers/     # Queries ao banco de dados
    │   └── seeds/         # Dados iniciais
    ├── routes/            # Definição das rotas
    └── shared/
        ├── middleware/    # Autenticação e validação
        └── services/      # JWT, bcrypt e traduções Yup
```

---

## Base URL

```
https://cities-api-4kol.onrender.com
```

---

## Deploy (Render)

O projeto está configurado para deploy na plataforma [Render](https://render.com).

- **Build Command:** `npm install && npm run build`
- **Start Command:** `node ./build/index.js`
- **Variável de ambiente:** `DATABASE_URL` com a Internal Database URL do PostgreSQL
