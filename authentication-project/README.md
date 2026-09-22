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

# ScreenShots

## Register
<img width="814" height="623" alt="image" src="https://github.com/user-attachments/assets/77bb8e18-4bc6-45ec-afbf-784b19077d72" />

## Login
<img width="815" height="578" alt="image" src="https://github.com/user-attachments/assets/48169c52-bf4f-467f-8075-7a54fe54fded" />

## Profile
<img width="814" height="593" alt="image" src="https://github.com/user-attachments/assets/6a0c9026-d41a-4917-9007-b08acff93d84" />


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





