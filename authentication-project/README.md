# Node.js + Express + MongoDB Atlas JWT Authentication

## Project Objective
This project is a beginner-friendly authentication API built with Node.js, Express.js, MongoDB Atlas, Mongoose, bcrypt, and JWT. It allows users to:

- register an account
- store a hashed password securely
- log in with email and password
- receive a JSON Web Token (JWT)
- access a private profile route using the token

## Technologies Used
- Node.js
- Express.js
- MongoDB Atlas
- Mongoose
- bcrypt
- jsonwebtoken
- dotenv
- Postman

## Project Structure
```text
authentication-project/
├── controllers/
│   └── authController.js
├── middleware/
│   └── authMiddleware.js
├── models/
│   └── User.js
├── routes/
│   └── authRoutes.js
├── .env
├── .env.example
├── .gitignore
├── package.json
├── server.js
└── README.md
```

## Installation
1. Open the terminal in the project folder.
2. Run:

```bash
npm install
```

## Environment Variable Setup
Create a `.env` file in the project root. Use the following format:

```env
MONGO_URI=your_mongodb_atlas_connection_string
JWT_SECRET=your_secret_key
PORT=3000
```

Important:
- Never commit your real `.env` file.
- Never paste real credentials into the README.
- Keep `.env` in `.gitignore`.

## MongoDB Atlas Setup
1. Create a free MongoDB Atlas account.
2. Create a cluster.
3. Create a database user.
4. Allow network access from your IP or use `0.0.0.0/0` for testing (only for learning/demo purposes).
5. Get the MongoDB connection string.
6. Paste the connection string into `MONGO_URI` in your `.env` file.
7. Use a database name such as `authenticationDB`.

Example format:

```env
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.abcde.mongodb.net/authenticationDB?retryWrites=true&w=majority
```

## How to Start the Server
```bash
npm install
npm run dev
```

If you want to run without nodemon:

```bash
npm start
```

You should see output similar to:

```text
MongoDB connected successfully
Server running on port 3000
```

## API Endpoints
### 1. Register User
```http
POST /register
```
Request body:
```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

### 2. Login User
```http
POST /login
```
Request body:
```json
{
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

### 3. Private Profile
```http
GET /profile
```
Header:
```http
Authorization: Bearer YOUR_JWT_TOKEN
```

## Postman Testing Instructions
### Base URL
```text
http://localhost:3000
```

### Test 1 - Register
- Method: `POST`
- URL: `http://localhost:3000/register`
- Body: JSON

```json
{
  "name": "Rahul",
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

Expected response:
```json
{
  "message": "User registered successfully"
}
```

### Test 2 - Login
- Method: `POST`
- URL: `http://localhost:3000/login`
- Body: JSON

```json
{
  "email": "rahul@example.com",
  "password": "Rahul@123"
}
```

Expected response:
```json
{
  "message": "Login successful",
  "token": "..."
}
```

Copy the JWT token value carefully.

### Test 3 - Profile Without Token
- Method: `GET`
- URL: `http://localhost:3000/profile`
- Do not send Authorization header.

Expected status:
```text
401 Unauthorized
```

### Test 4 - Profile With Invalid Token
- Method: `GET`
- URL: `http://localhost:3000/profile`
- Header:

```http
Authorization: Bearer invalidtoken123
```

Expected:
```text
401 Unauthorized
```

### Test 5 - Profile With Valid Token
- Method: `GET`
- URL: `http://localhost:3000/profile`
- Header:

```http
Authorization: Bearer YOUR_JWT_TOKEN
```

Expected:
```json
{
  "message": "Welcome to your private profile",
  "user": {
    "id": "...",
    "email": "rahul@example.com"
  }
}
```

## Authentication Flow
### Register
```text
Password
↓
bcrypt.hash()
↓
Hashed Password
↓
MongoDB Atlas
```

### Login
```text
Email + Password
↓
Find User
↓
bcrypt.compare()
↓
Correct Password
↓
JWT Token
```

### Private API
```text
JWT Token
↓
Auth Middleware
↓
jwt.verify()
↓
Valid Token?
↓
/profile
```

## Security Considerations
- Passwords are never stored in plain text.
- Passwords are hashed using bcrypt.
- JWT secret is stored in `.env`.
- MongoDB connection string is stored in `.env`.
- `.env` is never committed to Git.
- Private routes require a valid JWT.
- Passwords are never returned in API responses.

## Required Screenshots Checklist
Take these screenshots for assignment submission:

1. Successful registration in Postman
2. User stored in MongoDB Atlas
3. Hashed password visible in MongoDB Atlas
4. Successful login
5. JWT token received
6. `/profile` without token → 401 Unauthorized
7. `/profile` with invalid token → 401 Unauthorized
8. `/profile` with valid token → 200 OK





## Common Errors and Fixes
### 1. MongoDB connection error
Check your `MONGO_URI` in `.env`.

### 2. JWT secret missing
Add `JWT_SECRET` in `.env`.

### 3. Password not hashing
Ensure you use `bcrypt.hash()` before creating the user.

### 4. Login fails
Check whether the user exists and whether the password is correct.

### 5. 401 unauthorized on `/profile`
Send the token in the `Authorization` header as `Bearer <token>`.

## Viva Questions and Answers
### 1. What is Node.js?
Node.js is a JavaScript runtime that allows JavaScript to run on the server side.

### 2. What is Express.js?
Express.js is a small and flexible Node.js framework used to build web APIs and servers.

### 3. What is MongoDB?
MongoDB is a NoSQL database that stores data in collections and documents.

### 4. What is MongoDB Atlas?
MongoDB Atlas is the cloud-hosted managed version of MongoDB.

### 5. What is Mongoose?
Mongoose is a library that helps Node.js connect to MongoDB and define schemas.

### 6. What is bcrypt?
bcrypt is a library used to hash passwords securely.

### 7. Why do we hash passwords?
To protect user passwords from being stored in plain text and from being exposed in case of a database leak.

### 8. What is JWT?
JWT stands for JSON Web Token. It is a compact token used to verify a user identity.

### 9. What is authentication?
Authentication is the process of verifying who a user is.

### 10. What is authorization?
Authorization is the process of checking whether a user is allowed to access a resource.

### 11. What is middleware?
Middleware is a function that runs between the request and the final route handler.

### 12. What is an API?
An API is a set of endpoints that allows applications to communicate with each other.

### 13. What is the Authorization header?
It is an HTTP header used to send authentication credentials, such as a JWT token.

### 14. What is a Bearer token?
A Bearer token is a token sent in the `Authorization` header in the format `Bearer <token>`.

### 15. Why do we use `.env`?
We use `.env` to store sensitive values like database URLs and secrets outside the source code.

### 16. Why should passwords never be stored as plain text?
Plain text passwords are unsafe and can be easily read if the database is compromised.

### 17. What does bcrypt.compare() do?
It compares a plain text password with a hashed password to check if they match.

### 18. What does jwt.verify() do?
It checks whether a JWT is valid and returns the user data stored in the token.

### 19. What happens when a JWT is invalid?
The server rejects the request and returns `401 Unauthorized`.

### 20. Why is `/profile` a private endpoint?
Because it should only be accessed by a logged-in user with a valid token.

## Final Notes
This project is designed to be simple, clean, and easy to explain in a college viva. The most important idea is that passwords are hashed before saving, and private routes are protected by JWT verification.
