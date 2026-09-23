# Peer Mentorship Platform API

A backend API for a peer mentorship platform that allows users to register as mentors or mentees, manage mentor profiles, discover mentors, manage availability, and book mentorship appointments.

## Phase 1 — Core Backend & Mentorship Management

Phase 1 focuses on building the core backend functionality required for the mentorship platform.

### Phase 1 Features

- User registration and login
- JWT-based authentication
- Role-based authorization for mentors and mentees
- Mentor profile management
- Mentor discovery and search
- Mentor availability management
- Appointment booking and management
- Appointment conflict prevention
- Swagger API documentation

## Tech Stack

| Technology | Purpose |
|---|---|
| Node.js | Backend runtime |
| Express.js | Web framework |
| TypeScript | Programming language |
| MongoDB | Database |
| Mongoose | MongoDB ODM |
| JWT | Authentication |
| bcrypt | Password hashing |
| Swagger / OpenAPI | API documentation |
| Vitest | Testing |

## Project Structure

```text
peer-mentorship-platform-api/
│
├── src/
│   ├── config/
│   │   └── database.ts
│   │
│   ├── controllers/
│   │   ├── auth.controller.ts
│   │   ├── mentor.controller.ts
│   │   └── appointment.controller.ts
│   │
│   ├── docs/
│   │   └── swagger.ts
│   │
│   ├── middleware/
│   │   ├── auth.middleware.ts
│   │   └── error.middleware.ts
│   │
│   ├── models/
│   │   ├── User.ts
│   │   ├── MentorProfile.ts
│   │   └── Appointment.ts
│   │
│   ├── routes/
│   │   ├── auth.routes.ts
│   │   ├── mentor.routes.ts
│   │   └── appointment.routes.ts
│   │
│   ├── utils/
│   │   ├── jwt.ts
│   │   └── AppError.ts
│   │
│   ├── app.ts
│   └── server.ts
│
├── tests/
│   └── jwt.test.ts
│
├── .env.example
├── .gitignore
├── package.json
├── tsconfig.json
└── README.md