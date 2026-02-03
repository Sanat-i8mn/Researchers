# 🔬 Researchers Platform

A modern platform connecting researchers with clients for collaborative projects. Built with React, Node.js, Express, and MongoDB.

## 🌟 Features

- **AI-Powered Matching**: Smart algorithm to match researchers with projects
- **Verified Profiles**: Authenticated researcher profiles with credentials
- **Real-time Search**: Advanced search with filters and categories
- **Secure Authentication**: JWT-based auth with Google OAuth support
- **Project Management**: Post, browse, and manage research projects
- **Responsive Design**: Beautiful UI with Tailwind CSS and Framer Motion
- **Email Notifications**: Automated email system for updates

## 🛠️ Tech Stack

### Frontend
- React 18 + TypeScript
- Vite
- Tailwind CSS
- Framer Motion
- Lucide Icons
- React Hot Toast

### Backend
- Node.js + Express
- MongoDB + Mongoose
- JWT Authentication
- Nodemailer
- CORS enabled

## 📁 Project Structure

```
Researchers/
├── Frontend/           # React frontend application
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   │   ├── services/
│   │   └── types/
│   ├── public/
│   └── package.json
│
├── Back-End/          # Node.js backend API
│   ├── controllers/
│   ├── models/
│   ├── routes/
│   ├── middlewares/
│   ├── utils/
│   └── package.json
│
├── DEPLOYMENT_GUIDE.md
└── README.md
```

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ installed
- MongoDB database
- Git

### Local Development

1. **Clone the repository**
```bash
git clone https://github.com/Sanat-i8mn/Researchers.git
cd Researchers
```

2. **Setup Backend**
```bash
cd Back-End
npm install
cp .env.example .env
# Edit .env with your credentials
npm start
```

3. **Setup Frontend**
```bash
cd Frontend
npm install
cp .env.example .env
# Edit .env with backend URL
npm run dev
```

4. **Access Application**
- Frontend: http://localhost:5173
- Backend: http://localhost:8000

## 🌐 Deployment

### Deploy to Render

Follow the detailed guide in [DEPLOYMENT_GUIDE.md](./DEPLOYMENT_GUIDE.md)

**Quick Deploy:**
1. Push code to GitHub
2. Connect repository to Render
3. Deploy backend and frontend separately
4. Update environment variables

### One-Click Git Push
```bash
# Windows
git-push.bat

# Manual
git add .
git commit -m "Your message"
git push origin r98
```

## 🔐 Environment Variables

### Backend (.env)
```env
MONGO_URI=your_mongodb_uri
PORT=8000
NODE_ENV=production
SECRET_KEY=your_secret_key
ADMIN_EMAIL=admin@example.com
ADMIN_PASSWORD=secure_password
GOOGLE_CLIENT_ID=your_google_client_id
EMAIL_USER=your_email@gmail.com
EMAIL_PASS=your_app_password
FRONTEND_URL=https://your-frontend-url.com
```

### Frontend (.env)
```env
VITE_API_URL=https://your-backend-url.com/api/v1
```

## 📝 API Endpoints

### Authentication
- `POST /api/v1/auth/signup` - Register new user
- `POST /api/v1/auth/login` - User login
- `POST /api/v1/auth/google` - Google OAuth

### Projects
- `GET /api/v1/projects` - Get all projects
- `POST /api/v1/projects` - Create project
- `GET /api/v1/projects/:id` - Get project details
- `PUT /api/v1/projects/:id` - Update project
- `DELETE /api/v1/projects/:id` - Delete project

### Users
- `GET /api/v1/users/profile` - Get user profile
- `PUT /api/v1/users/profile` - Update profile
- `GET /api/v1/users/researchers` - Get all researchers

## 🎨 Features Showcase

### Animated UI
- Smooth page transitions with Framer Motion
- Interactive hover effects
- Gradient backgrounds with floating particles
- Responsive design for all devices

### Search & Filter
- Real-time search functionality
- Category-based filtering
- Location-based search
- Skill matching

### User Experience
- Compact, single-screen layouts
- Fast loading times
- Intuitive navigation
- Toast notifications

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the MIT License.

## 👥 Authors

- **Sanat** - [GitHub](https://github.com/Sanat-i8mn)

## 🙏 Acknowledgments

- React Team for amazing framework
- Tailwind CSS for utility-first CSS
- Framer Motion for animations
- MongoDB for database
- Render for hosting

## 📞 Support

For support, email rehubmail056@gmail.com or open an issue on GitHub.

---

Made with ❤️ by Sanat
