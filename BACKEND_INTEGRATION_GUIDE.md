# Post Project Backend Integration - Setup Guide

## ✅ What's Been Done

### Backend Changes:
1. **New Controller**: `project.postflow.controller.js` - Handles project posting from landing page
2. **New Route**: `POST /api/v1/project/post-from-landing` - No authentication required
3. **Updated Model**: Added `metadata` field to store additional project details
4. **Email Service**: Added generic `sendEmail` function for notifications

### Frontend Changes:
1. **API Service**: `projectService.ts` - Handles API calls with FormData
2. **Updated PostProjectPage**: 
   - Integrated with backend API
   - Added phone number field
   - Added expert invitation selection
   - Added loading states and error handling
   - Submits all form data on final step

## 🚀 How to Run

### 1. Start Backend Server
```bash
cd Back-End
npm install
npm start
```
Backend will run on: http://localhost:8000

### 2. Start Frontend Server
```bash
cd Frontend
npm install
npm run dev
```
Frontend will run on: http://localhost:5173

### 3. Test the Flow
1. Go to http://localhost:5173/post-project
2. Fill out all 10 steps
3. Submit the project
4. Check console for success/error messages

## 📧 Email Notifications

When a project is posted, the system sends:
1. **Welcome Email** to the client (with password setup link)
2. **Admin Notification** with project details
3. **Confirmation Email** to the client

## 🔧 Environment Variables

Make sure your `.env` file has:
```
MONGO_URI=your_mongodb_connection_string
SECRET_KEY=your_secret_key
ADMIN_EMAIL=admin@researchhub.com
EMAIL_USER=your_gmail@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=http://localhost:5173
```

## 📊 Database Schema

The project is stored with:
- All form fields from the 10-step flow
- User is auto-created if email doesn't exist
- Temporary password is generated
- PDF files are uploaded to Cloudinary
- Additional metadata stored in `metadata` field

## 🎯 What Happens on Submit

1. **User Creation**: If email doesn't exist, creates new client user
2. **File Upload**: Uploads PDF to Cloudinary (if provided)
3. **Project Creation**: Saves project with all details
4. **Email Notifications**: Sends 3 emails (client welcome, admin alert, client confirmation)
5. **Success Modal**: Shows expert invitation options
6. **Redirect**: Takes user to home page

## 🐛 Troubleshooting

### Backend not starting?
- Check MongoDB connection string
- Ensure all environment variables are set
- Run `npm install` again

### Frontend not connecting?
- Check if backend is running on port 8000
- Verify VITE_API_URL in frontend (should be http://localhost:8000/api/v1)
- Check browser console for CORS errors

### Emails not sending?
- Verify EMAIL_USER and EMAIL_PASS in .env
- Use Gmail App Password (not regular password)
- Check spam folder

## 📝 API Endpoint Details

**Endpoint**: `POST /api/v1/project/post-from-landing`

**Content-Type**: `multipart/form-data`

**Fields**:
- privacy, category, writingTypes, writingActivities, writingDeliverables
- writingLength, writingLengthUnit, expertiseTags, industries
- title, fullname, email, phoneNumber, countryCode
- description, feeType, budget, hiringTimeline, hiringFactors
- billingType, addressLine1, addressLine2, city, state, zipCode, country
- companyName, companyRegistration, vatNumber, vatDetails
- expertInvitation
- files (PDF upload)

**Response**:
```json
{
  "success": true,
  "message": "Project posted successfully",
  "project": { "id": "...", "title": "..." },
  "user": { "id": "...", "email": "...", "isNewUser": true }
}
```

## ✨ Next Steps (Optional Enhancements)

1. Add admin dashboard to view posted projects
2. Add email verification for new users
3. Add payment gateway integration for $9.99 expert invitation
4. Add project status tracking
5. Add expert matching algorithm
6. Add real-time notifications

---

**Status**: ✅ Backend integration complete and ready for testing!
