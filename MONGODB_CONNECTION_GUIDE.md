# MongoDB Atlas Connection - Quick Reference

## Your Setup Checklist ✅

### Step 1: Website Access
```
Visit: https://www.mongodb.com/cloud/atlas
```

### Step 2: Create Account
- Email: (your email)
- Password: (create one)
- Accept terms
- Verify email

### Step 3: Create Cluster
- Click "Create Deployment"
- Select: FREE tier
- Cloud: AWS
- Region: ap-south-1 (India) or closest to you
- Wait 1-2 minutes

### Step 4: Create User
**Menu: "Database Access"**
- Username: `primetrade_user`
- Password: `Primetrade@123` (or your choice)
- Role: Atlas Admin
- Save

### Step 5: Network Access
**Menu: "Network Access"**
- Click "Add IP Address"
- Select "Allow from Anywhere"
- Confirm

### Step 6: Get Connection String
**Menu: "Database" → Click "Connect"**
- Select "Drivers"
- Choose "Node.js"
- Copy the string

### Step 7: Format Connection String
Original:
```
mongodb+srv://primetrade_user:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

Updated (add /primetrade):
```
mongodb+srv://primetrade_user:Primetrade@123@cluster0.xxxxx.mongodb.net/primetrade?retryWrites=true&w=majority
```

⚠️ If password has `@`, replace with `%40`

### Step 8: Update .env
File: `backend/.env`

```
PORT=5000
NODE_ENV=development
MONGODB_URI=mongodb+srv://primetrade_user:Primetrade@123@cluster0.xxxxx.mongodb.net/primetrade?retryWrites=true&w=majority
JWT_SECRET=primetrade-secret-key-2024-production
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:3000
```

### Step 9: Restart Backend
Backend automatically connects and shows:
```
✅ Server running on port 5000
✅ MongoDB connected: cluster0.xxxxx.mongodb.net
```

---

## After Setup ✅

| Feature | Status |
|---------|--------|
| Frontend | ✅ Running (http://localhost:3000) |
| Backend | ✅ Running (http://localhost:5000) |
| MongoDB | ✅ Connected to Atlas |
| API Docs | ✅ http://localhost:5000/api-docs |
| **Full App** | ✅ **READY TO TEST** |

---

## Test Credentials

After setup, test with:
```
Email: user@primetrade.com
Password: user123
```

Or register new account via frontend!

---

## Common Issues & Fixes

| Error | Solution |
|-------|----------|
| Auth failed | Check username/password in connection string |
| IP not allowed | Go to Network Access → Allow Anywhere |
| Can't connect | Verify MongoDB URI has `/primetrade` before `?` |
| Connection timeout | Check if cluster is created (takes 1-2 mins) |

---

## Files to Help You

📄 `backend/SETUP_MONGODB_ATLAS.md` - Detailed guide
📄 `backend/.env.example` - Example configuration
📄 `backend/MONGODB_SETUP.md` - Alternative options

---

**Ready to connect? Go to MongoDB Atlas now!** 🚀
