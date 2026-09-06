# Assignment 6: Router-Level Middleware

## Objective

This assignment demonstrates router-level middleware in Express.js using
`express.Router()`.

## Features

- Creates a separate Express router.
- Defines a custom `routerLogger` middleware.
- Logs the HTTP method, request URL, and current date and time.
- Applies the middleware only to routes inside the router.
- Mounts the router at the `/api` path.

## Routes

| Method | URL | Response |
| --- | --- | --- |
| GET | `/api/students` | `Students List` |
| GET | `/api/courses` | `Courses List` |
| GET | `/api/faculty` | `Faculty List` |

## How to Run

```bash
cd assignment_six
npm install
npm start
```

The server runs at `http://localhost:3000`.

Open these URLs in a browser:

```text
http://localhost:3000/api/students
http://localhost:3000/api/courses
http://localhost:3000/api/faculty
```

## Expected Browser Output

```text
/api/students  -> Students List
/api/courses   -> Courses List
/api/faculty   -> Faculty List
```

## Expected Terminal Output

<img width="332" height="93" alt="Screenshot 2026-09-06 at 8 20 10 PM" src="https://github.com/user-attachments/assets/d0a640d0-e03e-4205-b412-057b829b35ee" />


## Concepts Covered

- `express.Router()`
- `router.use()`
- Router-level middleware
- `req.method`
- `req.originalUrl`
- `next()`
