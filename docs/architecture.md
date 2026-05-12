# Architecture Rules

## Layer dependency

features -> entities -> shared

---

## Allowed imports

- features can import entities/shared
- entities can import shared

---

## Forbidden imports

- shared cannot import entities/features
- entities cannot import features

---

## Layer responsibilities

### shared
Reusable generic code:
- ui
- lib
- api
- config

No business logic allowed.

### entities
Business entities:
- user
- job
- application

### features
User actions/business features:
- create-job
- auth
- update-job-status