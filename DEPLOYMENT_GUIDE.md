# 🚀 Deployment Guide - Researchers Platform

## 📋 Prerequisites
- Git installed
- GitHub account
- Render account (https://render.com)

---

## 1️⃣ Git Push to GitHub

### Step 1: Initialize Git (if not already done)
```bash
cd c:/Sanat/WorkingProject/Rhub-marketplace/working/ResearchersW/Researchers
git init
```

### Step 2: Add Remote Repository
```bash
git remote add origin https://github.com/Sanat-i8mn/Researchers.git
```

### Step 3: Check Current Branch
```bash
git branch
```

### Step 4: Add All Files
```bash
git add .
```

### Step 5: Commit Changes
```bash
git commit -m "Added animated signup header and deployment configs"
```

### Step 6: Push to GitHub
```bash
# If pushing to main branch
git push -u origin main

# If pushing to r98 branch
git push -u origin r98

# Force push if needed (use carefully)
git push -u origin r98 --force
```

---

## 2️⃣ Deploy Backend on Render

### Step 1: Create New Web Service
1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Web Service"**
3. Connect your GitHub repository: `Sanat-i8mn/Researchers`
4. Select branch: `r98` (or your main branch)

### Step 2: Configure Backend Service
```
Name: researchers-backend
Region: Singapore (or closest to you)
Branch: r98
Root Directory: Back-End
Environment: Node
Build Command: npm install
Start Command: node index.js
Plan: Free
```

### Step 3: Add Environment Variables
Click **"Advanced"** → **"Add Environment Variable"**

```
NODE_ENV=production
PORT=8000
MONGO_URI=mongodb+srv://hellodbacoach_db_user:X2D8L4tbmigErSLm@cluster0.oluljur.mongodb.net/researchhub?retryWrites=true&w=majority
SECRET_KEY=amar-jwt-secret-key-change-in-production-2024
ADMIN_EMAIL=rehubmail056@gmail.com
ADMIN_PASSWORD=1234
GOOGLE_CLIENT_ID=169128199514-ma5nvudd0uib1jqvi4cqqr76bjerlqag.apps.googleusercontent.com
EMAIL_USER=deepiotics1@gmail.com
EMAIL_PASS=cyjc hvrg urnw wphh
FRONTEND_URL=https://your-frontend-url.onrender.com
```

### Step 4: Deploy
- Click **"Create Web Service"**
- Wait for deployment (5-10 minutes)
- Copy your backend URL: `https://researchers-backend.onrender.com`

---

## 3️⃣ Deploy Frontend on Render

### Step 1: Create New Static Site
1. Go to https://dashboard.render.com
2. Click **"New +"** → **"Static Site"**
3. Connect your GitHub repository: `Sanat-i8mn/Researchers`
4. Select branch: `r98`

### Step 2: Configure Frontend Service
```
Name: researchers-frontend
Region: Singapore
Branch: r98
Root Directory: Frontend
Build Command: npm install && npm run build
Publish Directory: dist
Plan: Free
```

### Step 3: Add Environment Variables
```
VITE_API_URL=https://researchers-backend.onrender.com
```

### Step 4: Deploy
- Click **"Create Static Site"**
- Wait for deployment (5-10 minutes)
- Copy your frontend URL: `https://researchers-frontend.onrender.com`

---

## 4️⃣ Update Backend FRONTEND_URL

### After Frontend Deployment:
1. Go to Backend service on Render
2. Click **"Environment"**
3. Update `FRONTEND_URL` with your actual frontend URL
4. Click **"Save Changes"**
5. Backend will auto-redeploy

---

## 5️⃣ Verify Deployment

### Backend Health Check:
```
https://researchers-backend.onrender.com/health
```

### Frontend:
```
https://researchers-frontend.onrender.com
```

---

## 🔧 Troubleshooting

### Backend Issues:
- Check logs: Dashboard → Service → Logs
- Verify all environment variables are set
- Check MongoDB connection string

### Frontend Issues:
- Verify VITE_API_URL is correct
- Check build logs for errors
- Clear cache and redeploy

### CORS Issues:
- Ensure FRONTEND_URL in backend matches actual frontend URL
- Check backend CORS configuration

---

## 📝 Important Notes

1. **Free Tier Limitations:**
   - Services sleep after 15 minutes of inactivity
   - First request after sleep takes 30-60 seconds
   - 750 hours/month free

2. **Auto-Deploy:**
   - Render auto-deploys on git push to connected branch
   - Can disable in service settings

3. **Custom Domain:**
   - Can add custom domain in service settings
   - Update FRONTEND_URL and VITE_API_URL accordingly

4. **Environment Variables:**
   - Never commit .env files to git
   - Always use Render's environment variables

---

## 🎉 Success!

Your application is now live:
- **Frontend:** https://researchers-frontend.onrender.com
- **Backend:** https://researchers-backend.onrender.com

---

## 📞 Support

If you face any issues:
1. Check Render logs
2. Verify environment variables
3. Check GitHub repository connection
4. Review build/start commands
