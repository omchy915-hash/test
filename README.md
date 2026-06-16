# 🏃‍♂️ Running Tracker Website

A complete web application to track your running activities with real-time statistics and beautiful dashboard.

## ⚡ Quick Start (3 Easy Steps)

### Step 1️⃣: Run Setup
**On macOS/Linux:**
```bash
chmod +x setup.sh
./setup.sh
```

**On Windows:**
```bash
setup.bat
```

This will:
- ✅ Install all dependencies
- ✅ Create `.env` file
- ✅ Show you next steps

### Step 2️⃣: Setup MongoDB

**Easy Way - Use MongoDB Cloud (Recommended):**
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up for free
3. Create a cluster (takes 2-3 minutes)
4. Copy the connection string
5. Paste it in `server/.env` replacing the MONGODB_URI

**Alternative - Local MongoDB:**
1. Download from https://www.mongodb.com/try/download/community
2. Install it
3. Run `mongod` in a separate terminal

### Step 3️⃣: Start the App
**On macOS/Linux:**
```bash
chmod +x start.sh
./start.sh
```

**On Windows:**
```bash
start.bat
```

**Or manually:**
```bash
npm start
```

## 🎉 That's It!

Your app will open at: **http://localhost:3000**

## 📝 What to Do in the App

1. **Register** - Create an account
2. **Login** - Sign in with your email
3. **Log a Run** - Click button and fill in:
   - Date
   - Distance (km)
   - Duration (minutes)
   - Location (optional)
   - Notes (optional)
4. **View Stats** - See your total distance, pace, time, calories
5. **View History** - All your runs displayed as cards

## 🛠️ Project Structure

```
running-tracker/
├── client/              # React Frontend
│   ├── public/
│   ├── src/
│   │   ├── components/  # UI Components
│   │   ├── pages/       # Pages (Login, Dashboard, Register)
│   │   ├── App.js       # Main App
│   │   └── api.js       # Backend API calls
│   └── package.json
├── server/              # Node.js Backend
│   ├── models/          # Database Schemas
│   ├── routes/          # API Routes
│   ├── middleware/      # Authentication
│   ├── index.js         # Server
│   └── package.json
├── setup.sh             # Setup script
├── setup.bat            # Windows setup
├── start.sh             # Start script
├── start.bat            # Windows start
├── package.json
└── README.md
```

## 🔑 Features

✅ User Authentication (Login/Register)
✅ Log Running Sessions
✅ Real-time Statistics
✅ Run History with Cards
✅ Beautiful Responsive Design
✅ Automatic Pace Calculation
✅ Mobile Friendly

## 🚀 Tech Stack

- **Frontend**: React 18, Axios, React Router
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **Authentication**: JWT Tokens
- **Security**: Password Hashing with bcryptjs

## 📱 Endpoints

- `POST /api/auth/register` - Create account
- `POST /api/auth/login` - Login
- `GET /api/runs` - Get all your runs
- `POST /api/runs` - Add new run
- `DELETE /api/runs/:id` - Delete run
- `GET /api/runs/stats/overview` - Get statistics

## ⚠️ Troubleshooting

**Port Already in Use?**
```bash
# Change PORT in server/.env
PORT=5002
```

**MongoDB Connection Error?**
- Make sure MongoDB is running
- Check connection string in `.env`
- Try cloud: https://www.mongodb.com/cloud/atlas

**Dependencies Won't Install?**
```bash
rm -rf node_modules
rm package-lock.json
npm run install-all
```

**Clear Everything and Start Fresh?**
```bash
rm -rf node_modules
rm -rf client/node_modules
rm -rf server/node_modules
./setup.sh
```

## 📚 Detailed Setup Guide

### For Complete Beginners:

1. **Download Node.js** (if you don't have it):
   - Go to https://nodejs.org/
   - Download LTS version
   - Install it

2. **Download Git** (if you don't have it):
   - Go to https://git-scm.com/
   - Install it

3. **Clone your repository**:
   - Open terminal/cmd
   - Run: `git clone https://github.com/omchy915-hash/test.git`
   - Go in: `cd test`

4. **Run setup**:
   - Mac/Linux: `chmod +x setup.sh && ./setup.sh`
   - Windows: `setup.bat`

5. **Setup MongoDB** (choose one):
   - **Cloud (Easier)**: https://www.mongodb.com/cloud/atlas → copy string → paste in server/.env
   - **Local**: Download and run `mongod`

6. **Start app**:
   - Mac/Linux: `chmod +x start.sh && ./start.sh`
   - Windows: `start.bat`
   - Or: `npm start`

7. **Open in browser**: http://localhost:3000

8. **Create Account**: Register with email and password

9. **Start Tracking**: Log your runs!

## 🎓 Learning Resources

- React: https://react.dev
- Node.js: https://nodejs.org/
- MongoDB: https://docs.mongodb.com/
- Express: https://expressjs.com/

## 📞 Need Help?

- Check the README in each folder
- Look at the code comments
- Check browser console for errors (F12)
- Check terminal for server errors

## 🎯 Future Features

- Running route maps
- Performance charts
- Goal setting
- Friend tracking
- Mobile app

## 📄 License

MIT - Free to use!

---

**Happy Running! 🏃‍♂️🏃‍♀️**

Made with ❤️ for fitness enthusiasts
