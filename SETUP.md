# Quick Setup Guide

## ⚡ 5-Minute Quick Start

### Prerequisites
- Node.js 16+ and npm
- MongoDB installed or MongoDB Atlas account
- Git

---

## 🚀 Backend Setup

### 1. Navigate to Backend
```bash
cd backend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Configure Environment
```bash
cp .env.example .env
# Edit .env and update MongoDB URI
```

**Sample .env:**
```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=your-super-secret-key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### 4. Seed Initial Data (Optional)
```javascript
// Run this in Node shell to create demo admin user
const User = require('./src/models/User');
const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/primetrade');

const adminUser = new User({
  name: 'Admin User',
  email: 'admin@primetrade.com',
  password: 'admin123',
  role: 'admin'
});

adminUser.save().then(() => console.log('Admin user created'));
```

### 5. Start Backend Server
```bash
npm start
# Or for development with auto-reload:
npm run dev
```

**Output:**
```
✅ Server running on port 5000
📚 Swagger Docs: http://localhost:5000/api-docs
🔗 API Base: http://localhost:5000/api/v1
✅ MongoDB connected: localhost
```

---

## 🎨 Frontend Setup

### 1. Navigate to Frontend
```bash
cd ../frontend
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Start Development Server
```bash
npm start
```

**Application starts at:** `http://localhost:3000`

---

## ✅ Test the Application

### 1. Register New User
1. Go to http://localhost:3000
2. Click "Register"
3. Fill in details and submit
4. You'll be automatically logged in

### 2. Create a Task
1. In Dashboard, enter task title
2. Add description and priority
3. Click "Create Task"
4. Task appears in your task list

### 3. Update/Delete Tasks
1. Change task status dropdown
2. Or click Delete to remove

### 4. Admin Access (if admin)
1. Click "Admin Panel" in navbar
2. View all users and system stats
3. Delete users if needed

### 5. Test API Directly
Import `docs/Primetrade-API.postman_collection.json` in Postman and test all endpoints.

---

## 🧪 Default Test Credentials

### Regular User
- Email: `user@primetrade.com`
- Password: `user123`

### Admin User
- Email: `admin@primetrade.com`
- Password: `admin123`

*(Change these in production!)*

---

## 📊 API Health Check

```bash
curl http://localhost:5000/health
```

Expected response:
```json
{
  "status": "OK",
  "timestamp": "2024-01-15T15:30:00.000Z"
}
```

---

## 🔍 Swagger Documentation

Visit: `http://localhost:5000/api-docs`

This provides interactive API documentation where you can test endpoints directly.

---

## 🐛 Troubleshooting

### Issue: MongoDB Connection Failed
**Solution:**
- Ensure MongoDB is running: `mongod`
- Or update `.env` with MongoDB Atlas connection string
- Or use: `MONGODB_URI=mongodb://localhost:27017/primetrade`

### Issue: Port 5000 Already in Use
**Solution:**
```bash
# Change port in .env
PORT=5001

# Or kill process using port 5000
# Windows:
netstat -ano | findstr :5000
taskkill /PID <PID> /F

# Linux/Mac:
lsof -ti:5000 | xargs kill -9
```

### Issue: CORS Errors
**Solution:**
- Ensure `CORS_ORIGIN` in `.env` matches frontend URL
- Frontend runs on: `http://localhost:3000`
- Update `.env`: `CORS_ORIGIN=http://localhost:3000`

### Issue: JWT Token Errors
**Solution:**
- Ensure `JWT_SECRET` in `.env` is set
- For development, any secret works
- For production, use strong, random secret

---

## 📦 Production Deployment

### Backend
```bash
# Set production environment
export NODE_ENV=production
export MONGODB_URI=your-production-mongodb-uri
export JWT_SECRET=strong-random-secret

# Install dependencies
npm ci --only=production

# Start server
npm start
```

### Frontend
```bash
# Build for production
npm run build

# Deploy 'build' folder to hosting (Vercel, Netlify, AWS S3, etc.)
```

---

## 🐳 Docker Deployment

```bash
# Build and run with Docker Compose
docker-compose up --build

# Or individually:
docker build -t primetrade-backend ./backend
docker run -p 5000:5000 -e MONGODB_URI=mongodb://mongo:27017/primetrade primetrade-backend
```

---

## 📚 Key Files Reference

| File | Purpose |
|------|---------|
| `backend/src/app.js` | Express app setup |
| `backend/src/models/` | Database schemas |
| `backend/src/controllers/` | Business logic |
| `backend/src/routes/` | API endpoints |
| `backend/src/middleware/` | Auth, validation, RBAC |
| `frontend/src/pages/` | React page components |
| `frontend/src/context/` | State management |
| `frontend/src/services/` | API client |
| `docs/API.md` | API documentation |
| `docs/SCALABILITY.md` | Scaling guide |

---

## 🎯 Next Steps

1. ✅ Setup backend and frontend
2. ✅ Test CRUD operations
3. ✅ Review [docs/API.md](docs/API.md) for endpoint details
4. ✅ Explore [docs/SCALABILITY.md](docs/SCALABILITY.md) for production deployment
5. ✅ Customize for your needs
6. ✅ Deploy to production

---

## 📞 Common Commands

```bash
# Backend
npm install          # Install dependencies
npm start            # Start server
npm run dev          # Development mode with auto-reload
npm test             # Run tests

# Frontend
npm install          # Install dependencies
npm start            # Start dev server
npm run build        # Build for production
npm test             # Run tests
```

---

## ✨ Features Implemented

- ✅ User registration & login
- ✅ JWT authentication
- ✅ Role-based access control
- ✅ Password hashing (bcrypt)
- ✅ CRUD operations for tasks
- ✅ Input validation
- ✅ Error handling
- ✅ API versioning (v1)
- ✅ Swagger documentation
- ✅ Postman collection
- ✅ Admin dashboard
- ✅ Responsive UI
- ✅ Production-ready structure

---

**Happy Coding! 🚀**

For detailed information, see [README.md](../README.md) and [API.md](../docs/API.md)
