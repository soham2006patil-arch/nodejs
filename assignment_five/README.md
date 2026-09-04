# Express Basics Assignment (Assignment 5)

A comprehensive Express.js server application implementing basic routes, single and multiple dynamic route parameters, query parameter handling, and custom request logging middleware.

---

## 📁 Project Structure

```
assignment_five/
│
├── server.js
├── package.json
└── README.md
```

---

## 🚀 Steps to Run the Server

1. **Navigate to the project directory:**
   ```bash
   cd ASSIGNMENTS/assignment_five
   ```

2. **Install dependencies:**
   ```bash
   npm install
   ```

3. **Start the server:**
   ```bash
   npm start
   ```
   *Alternatively:*
   ```bash
   node server.js
   ```

4. The server will start and listen on port `3000`:
   ```
   Server is running on http://localhost:3000
   ```

---

## 📖 Explanation of Routes & Tasks

### Task 1: Basic Routes
Static endpoints returning distinct responses for standard paths:
- **`GET /`**: Returns `"Welcome to Home Page"`
- **`GET /about`**: Returns `"This is About Page"`
- **`GET /contact`**: Returns `"This is Contact Page"`

### Task 2: Route Parameter (Dynamic Route)
Captures dynamic input passed directly in the URL path using `req.params`:
- **`GET /user/:name`**: Reads the `:name` URL parameter and returns a personalized greeting.
  - *Example:* `/user/john` -> `"Hello john"`

### Task 3: Multiple Route Parameters
Extracts multiple parameters from a single URL pattern:
- **`GET /product/:id/:category`**: Reads both `:id` and `:category` parameters from `req.params`.
  - *Example:* `/product/101/electronics` -> `"Product ID: 101, Category: electronics"`

### Task 4: Query Parameters
Extracts optional key-value query strings attached to the URL using `req.query`:
- **`GET /search`**: Reads `name` and `role` query parameters via `req.query.name` and `req.query.role`.
  - *Example:* `/search?name=john&role=developer` -> `"Name: john, Role: developer"`

### Task 5: Request–Response Understanding
A custom middleware executed before all routes to log incoming request details to the terminal console:
- Logs `req.method` and `req.originalUrl`.

---

## 🧪 Sample Outputs

### HTTP Requests & Responses

| Route / Request | Method | Response Output |
| :--- | :--- | :--- |
| `http://localhost:3000/` | `GET` | `Welcome to Home Page` |
| `http://localhost:3000/about` | `GET` | `This is About Page` |
| `http://localhost:3000/contact` | `GET` | `This is Contact Page` |
| `http://localhost:3000/user/john` | `GET` | `Hello john` |
| `http://localhost:3000/product/101/electronics` | `GET` | `Product ID: 101, Category: electronics` |
| `http://localhost:3000/search?name=john&role=developer` | `GET` | `Name: john, Role: developer` |

---

### Terminal Console Output (Middleware Logger)

When the above requests are made, the terminal displays:

```text
Server is running on http://localhost:3000
GET /
GET /about
GET /contact
GET /user/john
GET /product/101/electronics
GET /search?name=john&role=developer
```
