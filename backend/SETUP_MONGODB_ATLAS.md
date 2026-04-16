# MongoDB Atlas Setup - Step by Step Guide

## Complete Setup in 5 Minutes

### STEP 1: Go to MongoDB Atlas Website
```
https://www.mongodb.com/cloud/atlas
```

---

### STEP 2: Create Free Account
1. Click "Try Free" button
2. Enter your email, password, first name, last name
3. Accept terms and click "Create your MongoDB Account"
4. Verify email (check your inbox)
5. Login to your account

---

### STEP 3: Create a Cluster
1. After login, you'll see "Create a Deployment"
2. Click it
3. Select **"FREE"** tier (M0)
4. Choose cloud provider: **AWS**
5. Choose region: **ap-south-1** (or closest to you)
6. Click **"Create Deployment"**
7. Wait 1-2 minutes for cluster to be created

---

### STEP 4: Create Database User
1. Go to **"Database Access"** menu (left sidebar)
2. Click **"Add New Database User"**
3. Enter:
   - Username: `primetrade_user`
   - Password: Generate a strong one (copy it!)
   - Select: "Built-in Role" → "Atlas Admin"
4. Click **"Add User"**

---

### STEP 5: Allow Network Access
1. Go to **"Network Access"** menu (left sidebar)
2. Click **"Add IP Address"**
3. Select **"Allow Access from Anywhere"** (for development)
4. Click **"Add Entry"**

---

### STEP 6: Get Connection String
1. Go back to **"Database"** (left sidebar)
2. Click **"Connect"** button on your cluster
3. Click **"Drivers"**
4. Select **"Node.js"** driver
5. Copy the connection string

It will look like:
```
mongodb+srv://primetrade_user:PASSWORD@cluster0.xxxxx.mongodb.net/?retryWrites=true&w=majority
```

---

### STEP 7: Replace in Connection String
In the copied string:
- Replace `PASSWORD` with your actual password (from Step 4)
- Add database name: Change end from `/?retryWrites...` to `/primetrade?retryWrites...`

Final string example:
```
mongodb+srv://primetrade_user:MySecurePassword123@cluster0.xxxxx.mongodb.net/primetrade?retryWrites=true&w=majority
```

---

### STEP 8: Update .env File
Copy the connection string and replace in `backend/.env`:

```
MONGODB_URI=mongodb+srv://primetrade_user:YourPasswordHere@cluster0.xxxxx.mongodb.net/primetrade?retryWrites=true&w=majority
```

---

### STEP 9: Test Connection
1. Backend automatically connects when restarted
2. You should see: `✅ MongoDB connected: cluster0.xxxxx.mongodb.net`

---

## Troubleshooting

### Error: "Authentication failed"
- Check username and password are correct in connection string
- If password has special characters (@, #, %), use URL encoding:
  - `@` → `%40`
  - `#` → `%23`
  - `%` → `%25`

### Error: "IP not allowed"
- Go to Network Access
- Add your current IP or enable "Allow from Anywhere"

### Error: "Database not found"
- Make sure `/primetrade` is at the end before `?retryWrites`

---

## Quick Copy-Paste Instructions

1. Visit: **https://www.mongodb.com/cloud/atlas**
2. Sign up with email
3. Create FREE cluster (AWS, ap-south-1)
4. Add database user: `primetrade_user`
5. Allow network access from anywhere
6. Get connection string from "Connect" → "Drivers" → "Node.js"
7. Copy paste into your `.env` file
8. Done!

---

**After setup is complete, all API endpoints will work!** ✅
