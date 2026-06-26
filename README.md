# ⚡ REST API Backend

Professional REST API built with Express.js

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js Version](https://img.shields.io/badge/node-%3E%3D18.0.0-brightgreen)](https://nodejs.org)
[![Express](https://img.shields.io/badge/Express-4.18.2-white)](https://expressjs.com)
[![JWT](https://img.shields.io/badge/JWT-Auth-red)](https://jwt.io)

## Features

- Express.js framework
- JWT authentication
- CORS enabled
- Error handling middleware
- Input validation
- Rate limiting

## Getting Started

```bash
npm install
npm run dev
```

## API Endpoints

### Auth
- POST /api/auth/register
- POST /api/auth/login
- POST /api/auth/logout

### Users
- GET /api/users
- GET /api/users/:id
- PUT /api/users/:id
- DELETE /api/users/:id

## Tech Stack

- Node.js
- Express.js
- JWT
- Bcrypt
