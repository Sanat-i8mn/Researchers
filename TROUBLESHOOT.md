# Troubleshooting "Failed to post project"

## Quick Checks:

### 1. Is Backend Running?
```bash
cd Back-End
npm start
```
Backend should show: `Server running on port 8000`

### 2. Check Frontend .env
Create/Check `Frontend/.env`:
```
VITE_API_URL=http://localhost:8000/api/v1
```

### 3. Check Browser Console
Open browser DevTools (F12) → Console tab
Look for:
- Red errors
- "Network Error" 
- "404" or "500" errors
- The logged API URL and data

### 4. Check Backend Console
Look for errors in the terminal where backend is running

## Common Errors:

### "Network Error" or "ERR_CONNECTION_REFUSED"
**Problem:** Backend is not running
**Solution:** 
```bash
cd Back-End
npm install
npm start
```

### "404 Not Found"
**Problem:** Wrong API URL or route not registered
**Solution:** 
- Check `Frontend/.env` has correct URL
- Check `Back-End/routes/project.route.js` has the route

### "500 Internal Server Error"
**Problem:** Backend error (database, missing env vars)
**Solution:**
- Check `Back-End/.env` has all required variables:
  ```
  MONGO_URI=your_mongodb_uri
  SECRET_KEY=your_secret
  ADMIN_EMAIL=admin@example.com
  EMAIL_USER=your_email
  EMAIL_PASS=your_password
  FRONTEND_URL=http://localhost:5173
  ```
- Check backend console for specific error

### "CORS Error"
**Problem:** Backend not allowing frontend requests
**Solution:** Check `Back-End/index.js` has CORS enabled:
```javascript
app.use(cors({
  origin: 'http://localhost:5173',
  credentials: true
}));
```

## Debug Steps:

1. Open browser console (F12)
2. Fill form and click "Complete Submission"
3. Check console for:
   - "Posting to: http://localhost:8000/api/v1/project/post-from-landing"
   - "Project data: {...}"
   - "API Error: ..."
4. Copy the error message
5. Check backend terminal for errors

## Test Backend Directly:

Use Postman or curl:
```bash
curl -X POST http://localhost:8000/api/v1/project/post-from-landing \
  -F "title=Test Project" \
  -F "email=test@example.com" \
  -F "fullname=Test User" \
  -F "description=Test description" \
  -F "category=writing"
```

If this works, the issue is in the frontend.
If this fails, the issue is in the backend.
