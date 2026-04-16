# 🚀 Primetrade Backend Assignment - GitHub Submission Guide

## How to Use This Repository

### 1. **Clone & Setup**

```bash
# Clone the repository
git clone <repository-url>
cd primetrade

# Backend setup
cd backend
npm install
cp .env.example .env
# Edit .env with your MongoDB URI and JWT_SECRET

# Frontend setup (in new terminal)
cd frontend
npm install
```

### 2. **Run Locally**

**Terminal 1 - Backend:**
```bash
cd backend
npm start
# Server runs on http://localhost:5000
```

**Terminal 2 - Frontend:**
```bash
cd frontend
npm start
# Frontend runs on http://localhost:3000
```

### 3. **Test the Application**

1. Open http://localhost:3000 in browser
2. Register a new user or use demo credentials:
   - Email: `user@primetrade.com`
   - Password: `user123`
3. Create, update, and delete tasks
4. Access Swagger docs at http://localhost:5000/api-docs

### 4. **API Documentation**

- **Full API Docs:** See `docs/API.md`
- **Postman Collection:** `docs/Primetrade-API.postman_collection.json`
- **Swagger UI:** http://localhost:5000/api-docs

### 5. **Production Deployment**

See `docs/SCALABILITY.md` for:
- Docker deployment
- Kubernetes configuration
- Load balancing setup
- Caching strategy (Redis)
- Database optimization

---

## 📋 What's Included

### ✅ Backend Features
- User registration & login with JWT authentication
- Password hashing with bcrypt
- Role-based access control (user/admin)
- CRUD APIs for task management
- Input validation & error handling
- API versioning (v1)
- Swagger documentation
- Production-ready structure

### ✅ Frontend Features
- React.js application
- Authentication pages (login/register)
- Protected dashboard
- Task CRUD interface
- Admin panel
- Error/success notifications
- Responsive design

### ✅ Documentation
- API documentation with examples
- Setup guide with troubleshooting
- Scalability & deployment guide
- Postman collection
- Architecture notes

---

## 🔧 Technology Stack

**Backend:**
- Node.js + Express.js
- MongoDB + Mongoose
- JWT authentication
- bcrypt password hashing
- Joi validation
- Swagger API docs

**Frontend:**
- React.js 18
- Axios HTTP client
- Context API (state management)
- CSS Modules

---

## 📊 Project Structure

```
primetrade/
├── backend/
│   ├── src/
│   │   ├── config/         # Database & swagger config
│   │   ├── controllers/    # Business logic
│   │   ├── middleware/     # Auth, validation, RBAC
│   │   ├── models/         # MongoDB schemas
│   │   ├── routes/         # API endpoints
│   │   ├── utils/          # Helpers
│   │   └── app.js          # Express setup
│   ├── server.js           # Entry point
│   ├── package.json
│   └── .env.example
│
├── frontend/
│   ├── src/
│   │   ├── components/     # React components
│   │   ├── context/        # Auth context
│   │   ├── pages/          # Page components
│   │   ├── services/       # API client
│   │   ├── styles/         # CSS files
│   │   ├── App.js
│   │   └── index.js
│   ├── public/             # Static files
│   └── package.json
│
├── docs/
│   ├── API.md              # API documentation
│   ├── SCALABILITY.md      # Deployment guide
│   ├── Primetrade-API.postman_collection.json
│   └── README files
│
├── README.md               # Main documentation
├── SETUP.md               # Quick start guide
└── CHECKLIST.md           # Submission checklist
```

---

## 🔐 Security Features

✅ JWT token authentication
✅ Bcrypt password hashing (10 salts)
✅ Input validation & sanitization
✅ Role-based access control (RBAC)
✅ CORS enabled
✅ Helmet security headers
✅ Protected routes
✅ Owner verification for modifications

---

## 📈 API Endpoints

### Authentication (4 endpoints)
```
POST   /api/v1/auth/register      - Create new user
POST   /api/v1/auth/login         - Login user
POST   /api/v1/auth/logout        - Logout user
GET    /api/v1/auth/me            - Get current user
```

### Tasks (5 endpoints)
```
GET    /api/v1/tasks              - Get all tasks
GET    /api/v1/tasks/:id          - Get task by ID
POST   /api/v1/tasks              - Create task
PUT    /api/v1/tasks/:id          - Update task
DELETE /api/v1/tasks/:id          - Delete task
```

### Admin (3 endpoints)
```
GET    /api/v1/admin/users        - Get all users (admin only)
DELETE /api/v1/admin/users/:id    - Delete user (admin only)
GET    /api/v1/admin/stats        - System statistics (admin only)
```

---

## 🧪 Testing with cURL

### Register
```bash
curl -X POST http://localhost:5000/api/v1/auth/register \
  -H "Content-Type: application/json" \
  -d '{
    "name":"John Doe",
    "email":"john@test.com",
    "password":"password123"
  }'
```

### Login
```bash
curl -X POST http://localhost:5000/api/v1/auth/login \
  -H "Content-Type: application/json" \
  -d '{
    "email":"user@primetrade.com",
    "password":"user123"
  }'
```

### Get Tasks (with token)
```bash
curl -X GET http://localhost:5000/api/v1/tasks \
  -H "Authorization: Bearer YOUR_JWT_TOKEN"
```

---

## 🚀 Deployment

### Using Docker
```bash
docker-compose up --build
# Starts backend, frontend, MongoDB, and Redis
```

### Using Kubernetes
```bash
kubectl apply -f backend/k8s/deployment.yaml
kubectl apply -f frontend/k8s/deployment.yaml
```

### Environment Variables
```
PORT=5000
NODE_ENV=production
MONGODB_URI=your-mongodb-uri
JWT_SECRET=your-strong-secret
CORS_ORIGIN=your-frontend-url
```

---

## 📚 Documentation Files

1. **[README.md](README.md)** - Project overview and features
2. **[SETUP.md](SETUP.md)** - Quick start guide with troubleshooting
3. **[docs/API.md](docs/API.md)** - Complete API documentation
4. **[docs/SCALABILITY.md](docs/SCALABILITY.md)** - Deployment & scaling guide
5. **[CHECKLIST.md](CHECKLIST.md)** - Requirements verification

---

## 🎓 Learning Outcomes

This project demonstrates:
- REST API design principles
- JWT authentication & authorization
- Role-based access control patterns
- Database modeling & optimization
- Frontend-backend integration
- Security best practices
- Scalable architecture design
- API documentation
- Docker & Kubernetes
- Production deployment

---

## ✨ Key Highlights

✅ **Production-Ready** - Follows industry best practices
✅ **Secure** - JWT, bcrypt, validation, RBAC
✅ **Scalable** - Microservices guide, caching, load balancing
✅ **Well-Documented** - Complete API docs and setup guides
✅ **Tested** - Postman collection for all endpoints
✅ **Containerized** - Docker and Kubernetes ready
✅ **Mobile-Friendly** - Responsive frontend UI

---

## 🐛 Troubleshooting

### MongoDB Connection Failed
- Ensure MongoDB is running or update MongoDB URI in `.env`

### CORS Errors
- Verify `CORS_ORIGIN` in `.env` matches your frontend URL

### Port Already in Use
- Change `PORT` in `.env` or kill the process using the port

### JWT Errors
- Check JWT_SECRET is properly set in `.env`

See [SETUP.md](SETUP.md) for more troubleshooting tips.

---

## 📞 Support

For detailed information:
- API issues: See [docs/API.md](docs/API.md)
- Setup issues: See [SETUP.md](SETUP.md)
- Deployment: See [docs/SCALABILITY.md](docs/SCALABILITY.md)

---

## 📜 License

MIT - Feel free to use this project for learning and development.

---

## 👨‍💼 Submitted By

**Name:** [Your Name]
**Date:** [Submission Date]
**Duration:** ~20 hours (including code + documentation)

---

## 🎯 Assignment Status

✅ **COMPLETED & READY FOR EVALUATION**

All requirements met:
- ✅ Backend with authentication & RBAC
- ✅ CRUD APIs for secondary entity
- ✅ Input validation & error handling
- ✅ Database schema design
- ✅ Frontend UI for testing
- ✅ API documentation
- ✅ Scalability notes
- ✅ Production-ready structure

---

**Thank you for reviewing this assignment! 🙏**
