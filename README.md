# Backend API for User Login and Data Retrieval

This is a Node.js backend API built using Express and Cors. The application allows the user to login and retrieve the users full name and details based on username. It uses basic authentication logic and serves data through API endpoints served with data through the userModels.

---

## Features

- **User Full Name Retrieval**: Fetches and splits a user's full name into first, middle, and last names.
- **User Login**: Verifies credentials and generates a random mock token upon successful login.

---

## Overview/Summary

```js
Backend:
npm install – Install dependencies for the backend.
nodemon server.js – Start the backend server (Port: 4000).
Frontend:
npm install – Install dependencies for the frontend.
npm start – Start the React frontend server (Port: 3000).
```

### Prerequisites

- [Node.js](https://nodejs.org) installed on your system.
- [NPM](https://www.npmjs.com/) or [Yarn](https://yarnpkg.com/) as a package manager.

## Installation

1. git clone <repository-url>
   cd <repository-directory>

- install all dependencies with:
  npm install

2. Start backend server -> nodemon server.js - Runs on port 4000

3. Start the frontend server -> npm start - Runs on port 3000
4. Api for access to users full name -> http://localhost:3000/app/getUserFullName

```json
place this in request body as a post request
{
  "username": "Dev01"
}
You should see this.
{
  "name": {
    "first": "Guy",
    "last": "Fieri"
  }
}
```

## Logging in

1. Use this API -> http://localhost:3000/app/login
2. Place this into json body

```json

{
  "username": "Dev01",
  "password": "theDevPass123"
}
Result should below
{
	"success": true,
	"token": "8awjrgs1mp"
}
```

this is a mock token not a JWT.

## Frontend

1. Navigate to the frontend directory:

- cd frontend

2. Install frontend dependencies with:

- npm install

3. Start the frontend server -> npm start - Runs on port 4000
