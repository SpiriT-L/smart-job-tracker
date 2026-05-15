# Entities

## User
Represents application user.

## Job
Represents job vacancy information.

## Application
Represents user's job application.

# Relations

User -> Application (one-to-many)

Job -> Application (one-to-many)

# ApplicationStatus

- APPLIED
- INTERVIEW
- OFFER
- REJECTED

# Business Rules

- Application must belong to User
- Application must belong to Job
- Status should use enum
- User email must be unique

# Database

Provider: PostgreSQL

ORM: Prisma
