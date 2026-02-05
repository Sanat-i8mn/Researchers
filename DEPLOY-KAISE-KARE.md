# 🚀 DEPLOY KAISE KARE - STEP BY STEP

## ⚡ SUPER EASY - 3 STEPS

### STEP 1: Git Setup (1 minute)
```
1. Double click: git-setup.bat
2. Wait for "GIT SETUP COMPLETE!"
```

### STEP 2: GitHub Upload (2 minutes)
```
1. Go to: https://github.com/new
2. Create new repo: "ResearchHub"
3. Copy repo URL (example: https://github.com/username/ResearchHub.git)
4. Double click: git-push-to-github.bat
5. Paste repo URL when asked
6. Wait for "PUSHED TO GITHUB!"
```

### STEP 3: Render Deploy (5 minutes)

#### A) Backend Deploy:
```
1. Go to: https://render.com
2. Click: New + → Web Service
3. Connect your GitHub repo
4. Settings:
   - Name: researchhub-backend
   - Root Directory: Back-End
   - Build Command: npm install
   - Start Command: npm start
   
5. Environment Variables (copy-paste):
   MONGO_URI=mongodb+srv://hellodbacoach_db_user:X2D8L4tbmigErSLm@cluster0.oluljur.mongodb.net/researchhub
   SECRET_KEY=amar-jwt-secret-key-change-in-production-2024
   ADMIN_EMAIL=rehubmail056@gmail.com
   ADMIN_PASSWORD=1234
   EMAIL_USER=deepiotics1@gmail.com
   EMAIL_PASS=cyjc hvrg urnw wphh
   NODE_ENV=production
   FRONTEND_URL=https://researchhub-frontend.onrender.com

6. Click: Create Web Service
7. Copy backend URL (example: https://researchhub-backend-xyz.onrender.com)
```

#### B) Frontend Deploy:
```
1. Click: New + → Static Site
2. Connect same GitHub repo
3. Settings:
   - Name: researchhub-frontend
   - Root Directory: Frontend
   - Build Command: npm install && npm run build
   - Publish Directory: dist
   
4. Environment Variable:
   VITE_API_URL=https://researchhub-backend-xyz.onrender.com/api/v1
   (Use your backend URL from step A7)

5. Click: Create Static Site
6. Copy frontend URL
```

#### C) Update Backend:
```
1. Go back to backend service
2. Environment → Edit FRONTEND_URL
3. Change to: https://researchhub-frontend-xyz.onrender.com
   (Use your frontend URL from step B6)
4. Save Changes
```

## ✅ DONE! 

Your app is live at:
- Frontend: https://researchhub-frontend-xyz.onrender.com
- Backend: https://researchhub-backend-xyz.onrender.com

## 🔄 Future Updates:

```
1. Make changes in code
2. Double click: deploy.bat
3. Enter commit message
4. Render will auto-deploy!
```

## ⚠️ Important:

- First load takes 30-60 seconds (free tier)
- After 15 min inactivity, server sleeps
- MongoDB already configured
- Email already configured

## 🐛 Problems?

**Backend not starting?**
- Check all env variables copied correctly
- Check MongoDB URI is correct

**Frontend blank page?**
- Check VITE_API_URL has /api/v1 at end
- Check backend is running

**CORS error?**
- Update FRONTEND_URL in backend
- Redeploy backend

---

**Bhai, bas yeh 3 steps follow karo! 5 minutes mein live ho jayega! 🚀**
