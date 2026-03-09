# Cities API

A RESTful API for managing cities and people, with JWT authentication. Built with Node.js, TypeScript, Express and Knex.

> 🇧🇷 [Leia em Português](./README.md)

---

## Technologies

- **Node.js** + **TypeScript**
- **Express** — HTTP framework
- **Knex** — SQL query builder
- **SQLite3** — database for development/testing
- **PostgreSQL** — database for production
- **JWT** — token-based authentication
- **Bcryptjs** — password hashing
- **Yup** — data validation
- **Jest** + **Supertest** — automated testing
- **CORS** — allowed origins control

---

## Prerequisites

- Node.js 18+
- npm

---

## Installation

```bash
# Clone the repository
git clone https://github.com/AlvesKZ/cities-api.git
cd cities-api

# Install dependencies
npm install
```

---

## Environment Variables

Create a `.env` file in the project root:

```env
PORT=3003
NODE_ENV=development
JWT_SECRET=your_secret_key

# CORS — allowed origins, separated by semicolons
ENABLED_CORS=https://yoursite.com;https://anothersite.com

# Production only (PostgreSQL)
DATABASE_URL=postgresql://user:password@host/database
```

---

## Scripts

| Command | Description |
|---|---|
| `npm run dev` | Starts the server in development mode with hot-reload |
| `npm run build` | Compiles TypeScript to JavaScript |
| `npm start` | Starts the server from the compiled build |
| `npm test` | Runs automated tests |
| `npm run knex:migrate` | Runs database migrations |
| `npm run knex:rollback` | Reverts the last migration |
| `npm run knex:rollback-all` | Reverts all migrations |
| `npm run knex:seed` | Seeds the database with initial data |

---

## Database

### Migrations and Seeds (development)

```bash
npm run knex:migrate
npm run knex:seed
```

---

## Endpoints

### Authentication

| Method | Route | Description |
|---|---|---|
| `POST` | `/cadastrar` | Creates a new user |
| `POST` | `/entrar` | Logs in and returns a JWT token |

> All other endpoints require the JWT token in the header: `Authorization: Bearer <token>`

---

### Cities

| Method | Route | Description |
|---|---|---|
| `GET` | `/cidades` | Lists all cities (paginated) |
| `POST` | `/cidades` | Creates a new city |
| `GET` | `/cidades/:id` | Fetches a city by ID |
| `PUT` | `/cidades/:id` | Updates a city by ID |
| `DELETE` | `/cidades/:id` | Deletes a city by ID |

---

### People

| Method | Route | Description |
|---|---|---|
| `GET` | `/pessoas` | Lists all people (paginated) |
| `POST` | `/pessoas` | Creates a new person |
| `GET` | `/pessoas/:id` | Fetches a person by ID |
| `PUT` | `/pessoas/:id` | Updates a person by ID |
| `DELETE` | `/pessoas/:id` | Deletes a person by ID |

---

## Project Structure

```
src/
└── server/
    ├── controllers/       # Endpoint logic (validation + response)
    ├── database/
    │   ├── knex/          # Knex configuration and environment
    │   ├── migrations/    # Database migrations
    │   ├── models/        # Model interfaces
    │   ├── providers/     # Database queries
    │   └── seeds/         # Initial data
    ├── routes/            # Route definitions
    └── shared/
        ├── middleware/    # Authentication and validation
        └── services/      # JWT, bcrypt and Yup translations
```

---

## Base URL

```
https://cities-api-4kol.onrender.com
```

---

## Deploy (Render)

The project is configured for deployment on [Render](https://render.com).

- **Build Command:** `npm install && npm run build`
- **Start Command:** `node ./build/index.js`
- **Environment variable:** `DATABASE_URL` with the PostgreSQL Internal Database URL
