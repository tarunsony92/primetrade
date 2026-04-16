# Primetrade Backend Assignment - Scalable REST API with Authentication

A production-ready backend API with JWT authentication, role-based access control (RBAC), and CRUD operations, along with a React frontend UI.

## 🎯 Project Overview

This project demonstrates:
- **Secure User Authentication** with JWT tokens and password hashing (bcrypt)
- **Role-Based Access Control** (User & Admin roles)
- **RESTful APIs** following best practices
- **CRUD Operations** for tasks/projects management
- **Input Validation & Error Handling**
- **API Versioning** (v1)
- **Database Schema** with MongoDB/PostgreSQL
- **Frontend UI** for API interaction
- **Swagger/Postman Documentation**

## 📁 Project Structure

```
primetrade/
├── backend/                    # Node.js/Express API
│   ├── src/
│   │   ├── config/            # Database & environment config
│   │   ├── controllers/       # Request handlers
│   │   ├── middleware/        # Auth, validation, error handling
│   │   ├── models/            # Database schemas
│   │   ├── routes/            # API endpoints
│   │   ├── utils/             # Helpers, validators
│   │   └── app.js             # Express app setup
│   ├── .env                   # Environment variables
│   ├── .env.example           # Example env file
│   ├── package.json
│   └── server.js              # Entry point
├── frontend/                   # React UI
│   ├── src/
│   │   ├── components/        # React components
│   │   ├── pages/             # Page components
│   │   ├── context/           # Auth context
│   │   ├── services/          # API calls
│   │   ├── App.js
│   │   └── index.js
│   ├── package.json
│   └── public/
└── docs/
    ├── API.md                 # API documentation
    └── SCALABILITY.md         # Scalability notes
```

## 🚀 Quick Start

### Backend Setup

```bash
cd backend
npm install
cp .env.example .env
# Update .env with your database credentials
npm start
```

### Frontend Setup

```bash
cd frontend
npm install
npm start
```

### Default Credentials (for testing)

- **Admin User**: `admin@primetrade.com` / `admin123`
- **Regular User**: `user@primetrade.com` / `user123`

## 📚 API Endpoints

### Authentication
- `POST /api/v1/auth/register` - Register new user
- `POST /api/v1/auth/login` - Login user
- `POST /api/v1/auth/logout` - Logout

### Tasks (CRUD)
- `GET /api/v1/tasks` - Get all tasks (protected)
- `GET /api/v1/tasks/:id` - Get single task (protected)
- `POST /api/v1/tasks` - Create task (user role)
- `PUT /api/v1/tasks/:id` - Update task (owner/admin)
- `DELETE /api/v1/tasks/:id` - Delete task (owner/admin)

### Admin Routes
- `GET /api/v1/admin/users` - List all users (admin only)
- `DELETE /api/v1/admin/users/:id` - Delete user (admin only)

## 🔐 Security Features

✅ JWT token-based authentication
✅ Password hashing with bcrypt
✅ Input validation & sanitization
✅ CORS enabled
✅ Rate limiting on auth endpoints
✅ Secure token refresh mechanism
✅ Role-based access control (middleware)
✅ Protected routes with middleware

## 🏗️ Scalability Considerations

See [SCALABILITY.md](docs/SCALABILITY.md) for:
- Microservices architecture
- Caching strategies (Redis)
- Database optimization
- Load balancing
- Docker deployment

## 🛠️ Technology Stack

**Backend:**
- Node.js + Express
- MongoDB (with Mongoose) / PostgreSQL
- JWT (jsonwebtoken)
- bcrypt (password hashing)
- Joi (validation)
- Swagger (documentation)

**Frontend:**
- React.js
- Axios (HTTP client)
- Context API (state management)
- CSS Modules

## 📝 Database Schema

### User Model
```
{
  _id: ObjectId,
  email: String (unique),
  password: String (hashed),
  name: String,
  role: String (user/admin),
  createdAt: Date,
  updatedAt: Date
}
```

### Task Model
```
{
  _id: ObjectId,
  title: String,
  description: String,
  userId: ObjectId (reference to User),
  status: String (pending/in-progress/completed),
  priority: String (low/medium/high),
  createdAt: Date,
  updatedAt: Date
}
```

## 📖 API Documentation

Access Swagger UI after starting the backend:
```
http://localhost:5000/api-docs
```

Postman Collection: See `docs/Primetrade-API.postman_collection.json`

## ✅ Testing

```bash
# Backend tests
cd backend
npm test

# Frontend tests
cd frontend
npm test
```

## 📦 Deployment

### Docker
```bash
docker-compose up --build
```

### Environment Variables

Create `.env` file in backend:
```
PORT=5000
MONGODB_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your-secret-key-here
JWT_EXPIRE=7d
NODE_ENV=development
CORS_ORIGIN=http://localhost:3000
```

## 📋 Checklist

- ✅ User authentication (register/login)
- ✅ JWT token management
- ✅ Role-based access control
- ✅ CRUD APIs for tasks
- ✅ Input validation & error handling
- ✅ API versioning (v1)
- ✅ Database schema design
- ✅ Frontend UI integration
- ✅ API documentation
- ✅ Security best practices
- ✅ Scalability notes
- ✅ Error handling middleware
- ✅ Rate limiting

## 🎓 Learning Outcomes

This project covers:
1. RESTful API design principles
2. JWT authentication & authorization
3. Role-based access control patterns
4. Database modeling
5. Frontend-backend integration
6. Security best practices
7. Scalable project architecture
8. API documentation

## 📞 Support

For issues or questions, refer to:
- [API Documentation](docs/API.md)
- [Scalability Guide](docs/SCALABILITY.md)
- Backend logs: `backend/logs/`

---

**Assignment Completed By:** [Your Name]
**Submission Date:** [Date]
**Live Demo:** [Link to deployed version, if applicable]
