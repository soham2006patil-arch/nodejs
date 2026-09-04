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
  <img width="447" height="232" alt="Screenshot 2026-09-04 at 8 58 28 PM" src="https://github.com/user-attachments/assets/6c0be6d4-f255-41b9-9494-49222c2e7619" />

- **`GET /about`**: Returns `"This is About Page"`
  <img width="485" height="144" alt="Screenshot 2026-09-04 at 8 58 47 PM" src="https://github.com/user-attachments/assets/6ea03bf1-04fe-493c-9ed4-ed4bbe363f61" />

- **`GET /contact`**: Returns `"This is Contact Page"`
  <img width="481" height="151" alt="Screenshot 2026-09-04 at 8 59 04 PM" src="https://github.com/user-attachments/assets/b523eab9-325b-47f6-900a-043b2b3abe7e" />


### Task 2: Route Parameter (Dynamic Route)
Captures dynamic input passed directly in the URL path using `req.params`:
- **`GET /user/:name`**: Reads the `:name` URL parameter and returns a personalized greeting.
  - *Example:* `/user/john` -> `"Hello john"`
    <img width="494" height="145" alt="Screenshot 2026-09-04 at 8 59 52 PM" src="https://github.com/user-attachments/assets/f32f4249-e456-4753-b839-f966f9deeb7d" />


### Task 3: Multiple Route Parameters
Extracts multiple parameters from a single URL pattern:
- **`GET /product/:id/:category`**: Reads both `:id` and `:category` parameters from `req.params`.
  - *Example:* `/product/101/electronics` -> `"Product ID: 101, Category: electronics"`
<img width="559" height="175" alt="Screenshot 2026-09-04 at 9 00 26 PM" src="https://github.com/user-attachments/assets/e974c3a3-239d-40a8-a54d-0414bd20f997" />


### Task 4: Query Parameters
Extracts optional key-value query strings attached to the URL using `req.query`:
- **`GET /search`**: Reads `name` and `role` query parameters via `req.query.name` and `req.query.role`.
  - *Example:* `/search?name=john&role=developer` -> `"Name: john, Role: developer"`
  <img width="711" height="191" alt="Screenshot 2026-09-04 at 9 01 41 PM" src="https://github.com/user-attachments/assets/9d3e4fd1-04ad-4339-938b-bcb8e062454e" />


### Task 5: Request–Response Understanding
A custom middleware executed before all routes to log incoming request details to the terminal console:
- Logs `req.method` and `req.originalUrl`.
  <img width="473" height="261" alt="Screenshot 2026-09-04 at 9 06 23 PM" src="https://github.com/user-attachments/assets/b90a907c-b764-4f84-83b2-b959cece58f3" />


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
