# MongoDB Setup Guide for Primetrade

## Option 1: Using Docker (Easiest - Recommended)

### Step 1: Start MongoDB with Docker
```bash
docker run -d -p 27017:27017 --name primetrade-mongodb mongo:latest
```

This will:
- Start MongoDB on port 27017
- Create a container named "primetrade-mongodb"
- Allow the backend to connect

### Check if MongoDB is running:
```bash
docker ps
```

You should see the container listed.

---

## Option 2: MongoDB Atlas (Cloud - No Installation Needed)

### Step 1: Create Account
1. Go to https://www.mongodb.com/cloud/atlas
2. Click "Sign Up for Free"
3. Create a free account

### Step 2: Create a Cluster
1. After login, click "Create a Deployment"
2. Choose "FREE" tier
3. Select AWS, Region: closest to your location
4. Click "Create Deployment"
5. Wait 1-2 minutes for cluster to be ready

### Step 3: Get Connection String
1. Click "Connect"
2. Click "Connect your application"
3. Select Node.js driver
4. Copy the connection string
5. Replace `<username>`, `<password>`, `<cluster-url>` with your credentials

### Step 4: Update .env
Edit `backend/.env`:
```
MONGODB_URI=mongodb+srv://username:password@cluster0.xxxxx.mongodb.net/primetrade?retryWrites=true&w=majority
```

---

## Option 3: Local MongoDB Installation

### Windows:
1. Download: https://www.mongodb.com/try/download/community
2. Run installer
3. Click "Install MongoDB as a Service"
4. MongoDB will start automatically
5. Use: `MONGODB_URI=mongodb://localhost:27017/primetrade`

### Mac:
```bash
brew tap mongodb/brew
brew install mongodb-community
brew services start mongodb-community
```

### Linux (Ubuntu):
```bash
sudo apt-get install -y mongodb
sudo systemctl start mongodb
```

---

## Current .env Setup

Your .env is configured for local MongoDB:
```
MONGODB_URI=mongodb://localhost:27017/primetrade
JWT_SECRET=primetrade-secret-key-2024-production
```

---

## Testing Connection

After setting up, the backend will automatically connect.

Check if connected:
- Backend console will show: `✅ MongoDB connected: localhost`
- If error: `❌ MongoDB connection failed: ...`

---

## Recommended for This Project

**Option 1 (Docker)** if you have Docker installed
**Option 2 (MongoDB Atlas)** if you don't have MongoDB/Docker installed

Both require minimal setup and work great locally!

---

## Troubleshooting

### Error: "Cannot connect to MongoDB"
- Check .env MONGODB_URI is correct
- For Docker: Run `docker ps` to verify container is running
- For Atlas: Check connection string has correct username/password

### Error: "Authentication failed"
- MongoDB Atlas: Username/password in connection string wrong
- Check special characters are URL encoded: `@` → `%40`

### MongoDB not starting
- Docker: Run `docker logs primetrade-mongodb` to see logs
- Local: Check if port 27017 is available

---

## Next Steps

1. Choose one option above
2. Update .env if needed
3. Backend will connect automatically
4. Test API at http://localhost:5000/api-docs
