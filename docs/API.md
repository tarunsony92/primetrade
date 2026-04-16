# API Documentation

## Base URL
```
http://localhost:5000/api/v1
```

## Authentication
All protected endpoints require JWT token in the `Authorization` header:
```
Authorization: Bearer <your-jwt-token>
```

---

## 📋 Authentication Endpoints

### Register New User
**POST** `/auth/register`

**Request Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "User registered successfully",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### Login User
**POST** `/auth/login`

**Request Body:**
```json
{
  "email": "john@example.com",
  "password": "securepassword123"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Login successful",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  "user": {
    "id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

### Logout
**POST** `/auth/logout`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Logout successful. Please remove token from client storage."
}
```

---

### Get Current User
**GET** `/auth/me`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "user": {
    "_id": "user-id",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "user",
    "isActive": true,
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

## 📝 Task Endpoints

### Get All Tasks
**GET** `/tasks`

**Headers:**
```
Authorization: Bearer <token>
```

**Query Parameters:**
- `status` (optional): `pending`, `in-progress`, `completed`
- `priority` (optional): `low`, `medium`, `high`

**Example:**
```
GET /tasks?status=pending&priority=high
```

**Response (200):**
```json
{
  "success": true,
  "count": 5,
  "tasks": [
    {
      "_id": "task-id",
      "title": "Complete API",
      "description": "Build REST API",
      "userId": "user-id",
      "status": "in-progress",
      "priority": "high",
      "dueDate": "2024-01-20T00:00:00Z",
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### Get Single Task
**GET** `/tasks/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "task": {
    "_id": "task-id",
    "title": "Complete API",
    "description": "Build REST API",
    "userId": "user-id",
    "status": "in-progress",
    "priority": "high",
    "dueDate": "2024-01-20T00:00:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### Create Task
**POST** `/tasks`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body:**
```json
{
  "title": "Complete API documentation",
  "description": "Write comprehensive API docs",
  "priority": "high",
  "dueDate": "2024-01-25T00:00:00Z"
}
```

**Response (201):**
```json
{
  "success": true,
  "message": "Task created successfully",
  "task": {
    "_id": "task-id",
    "title": "Complete API documentation",
    "description": "Write comprehensive API docs",
    "userId": "user-id",
    "status": "pending",
    "priority": "high",
    "dueDate": "2024-01-25T00:00:00Z",
    "createdAt": "2024-01-15T10:30:00Z",
    "updatedAt": "2024-01-15T10:30:00Z"
  }
}
```

---

### Update Task
**PUT** `/tasks/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Request Body (any of these fields):**
```json
{
  "title": "Updated title",
  "description": "Updated description",
  "status": "completed",
  "priority": "low",
  "dueDate": "2024-01-30T00:00:00Z"
}
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task updated successfully",
  "task": { /* updated task object */ }
}
```

---

### Delete Task
**DELETE** `/tasks/:id`

**Headers:**
```
Authorization: Bearer <token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "Task deleted successfully"
}
```

---

## 👨‍💼 Admin Endpoints

### Get All Users (Admin Only)
**GET** `/admin/users`

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "success": true,
  "count": 10,
  "users": [
    {
      "_id": "user-id",
      "name": "John Doe",
      "email": "john@example.com",
      "role": "user",
      "isActive": true,
      "createdAt": "2024-01-15T10:30:00Z",
      "updatedAt": "2024-01-15T10:30:00Z"
    }
  ]
}
```

---

### Delete User (Admin Only)
**DELETE** `/admin/users/:userId`

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "success": true,
  "message": "User and associated tasks deleted successfully"
}
```

---

### Get System Statistics (Admin Only)
**GET** `/admin/stats`

**Headers:**
```
Authorization: Bearer <admin-token>
```

**Response (200):**
```json
{
  "success": true,
  "stats": {
    "totalUsers": 25,
    "totalTasks": 156,
    "adminCount": 2,
    "completedTasks": 89,
    "activeUsers": 23
  }
}
```

---

## 🔴 Error Responses

### 400 Bad Request
```json
{
  "success": false,
  "message": "Validation error",
  "errors": [
    {
      "msg": "Valid email is required",
      "param": "email",
      "location": "body"
    }
  ]
}
```

### 401 Unauthorized
```json
{
  "success": false,
  "message": "Invalid email or password"
}
```

### 403 Forbidden
```json
{
  "success": false,
  "message": "Access denied. Required role: admin"
}
```

### 404 Not Found
```json
{
  "success": false,
  "message": "Task not found",
  "path": "/api/v1/tasks/invalid-id"
}
```

### 409 Conflict
```json
{
  "success": false,
  "message": "User already exists with this email"
}
```

### 500 Internal Server Error
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

---

## 🔐 Security Notes

1. **JWT Token Format:** Bearer token format required in `Authorization` header
2. **Token Expiration:** Tokens expire after 7 days (configurable via `JWT_EXPIRE`)
3. **Password Hashing:** Passwords are hashed using bcrypt with 10 salts
4. **Role-Based Access:** Admin endpoints are protected via middleware
5. **Input Validation:** All inputs are validated before processing
6. **Ownership Verification:** Users can only modify their own tasks

---

## 🧪 Testing with Postman/cURL

### Register Example:
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{"name":"John","email":"john@test.com","password":"password123"}'
```

### Get Tasks Example:
```bash
curl -X GET http://localhost:5000/api/v1/tasks \
  -H "Authorization: Bearer your-token-here"
```

### Create Task Example:
```bash
curl -X POST http://localhost:5000/api/v1/tasks \
  -H "Authorization: Bearer your-token-here" \
  -H "Content-Type: application/json" \
  -d '{"title":"My Task","priority":"high"}'
```

---

## 📊 Rate Limiting

- **Auth Endpoints:** 100 requests per 15 minutes
- **Other Endpoints:** Based on server configuration

---

## 📞 Support & Issues

For detailed information or issues, please refer to:
- [Main README](../README.md)
- [Scalability Guide](./SCALABILITY.md)
- GitHub Issues
