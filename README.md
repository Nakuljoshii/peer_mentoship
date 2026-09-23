# Peer Mentorship Platform API

Week 1 backend foundation for a peer-mentorship platform. It includes user registration and login, JWT authentication, bcrypt password hashing, and mentor/mentee authorization.

## Stack

Node.js, Express, TypeScript, MongoDB/Mongoose, JWT, bcrypt, Swagger, and Postman.

## Start locally

1. Install Node.js 20 or later and run `npm install`.
2. Copy `.env.example` to `.env` and set a real `JWT_SECRET` of at least 32 random characters. Update `MONGODB_URI` for your local MongoDB or MongoDB Atlas connection.
3. Start the development server with `npm run dev`.

The health endpoint is `GET http://localhost:5000/api/health` and interactive Swagger documentation is at `http://localhost:5000/api/docs`.

## Authentication endpoints

| Method | Endpoint | Auth | Purpose |
| --- | --- | --- | --- |
| POST | `/api/v1/auth/register` | No | Create a mentor or mentee and receive a JWT. |
| POST | `/api/v1/auth/login` | No | Sign in and receive a JWT. |
| GET | `/api/v1/auth/me` | Bearer JWT | Return the authenticated user. |
| GET | `/api/v1/auth/mentor-area` | Mentor JWT | Demonstrate role-based authorization. |

Example registration body:

```json
{
  "name": "Aarav Sharma",
  "email": "aarav@example.com",
  "password": "securePass123",
  "role": "mentor"
}
```

Import `postman/Peer-Mentorship-Week-1.postman_collection.json` into Postman. Register or log in first: the collection saves the returned token automatically for the protected requests.

## Important security choices

- Passwords are hashed with bcrypt (12 rounds) before storage and excluded from ordinary user queries.
- The JWT secret and MongoDB URI live only in `.env`; `.env` is ignored by Git.
- Authentication checks the token and confirms that the user still exists.
- `authorize('mentor')` provides reusable role-based access control for future mentor-only features.

## Git and GitHub

After confirming it works locally, initialize this folder as a Git repository, commit the source (never `.env`), create an empty GitHub repository, add it as `origin`, then push your `main` branch.
