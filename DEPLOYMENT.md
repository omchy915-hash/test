# 🏃‍♂️ Running Tracker - Live Website

A complete web application to track your running activities with real-time statistics, beautiful dashboard, and FREE integrated maps!

## 🚀 LIVE DEPLOYMENT GUIDE

Your website is ready to deploy and go live on the internet!

### **EASIEST OPTION: Deploy to Render (Recommended)**

#### Step 1: Prepare Your Repository
Your code is already on GitHub at: https://github.com/omchy915-hash/test

#### Step 2: Sign Up & Deploy
1. Go to https://render.com (Sign up with GitHub - click "Continue with GitHub")
2. Click "New +" → "Web Service"
3. Select your repository: `omchy915-hash/test`
4. Fill in the details:
   - **Name**: running-tracker
   - **Environment**: Node
   - **Build Command**: `npm run build`
   - **Start Command**: `cd server && npm start`

#### Step 3: Add Environment Variables
In Render dashboard, add these:
```
MONGODB_URI = (get from step 4 below)
JWT_SECRET = running_tracker_secret_key_2024
NODE_ENV = production
PORT = 5000
```

#### Step 4: Setup Free MongoDB
1. Go to https://www.mongodb.com/cloud/atlas
2. Sign up (free)
3. Create a **FREE cluster** (M0 tier)
4. Go to "Databases" → "Connect" → "Drivers"
5. Copy the connection string
6. Replace `<password>` with your password
7. Paste into Render's MONGODB_URI

#### Step 5: Deploy!
- Click "Create Web Service"
- Wait 3-5 minutes
- Your website will be LIVE! 🎉

**Your live URL will be**: `https://running-tracker-xxxxx.onrender.com`

---

### Alternative: Vercel (For Frontend Only)

1. Go to https://vercel.com
2. Import your GitHub repository
3. Select `client` as root directory
4. Deploy
5. Connect backend separately to Render

---

### Alternative: Heroku (Classic)

1. Install Heroku CLI: https://devcenter.heroku.com/articles/heroku-cli
2. Run these commands:
```bash
heroku login
heroku create your-app-name
heroku config:set MONGODB_URI=your_mongodb_string
heroku config:set JWT_SECRET=your_secret
git push heroku main
```

---

## 📊 NEW FEATURE: FREE MAPS! 🗺️

Your app now includes:
- **OpenStreetMap**: Free, no API key needed
- **Leaflet Maps**: Beautiful, lightweight
- **Location Tracking**: Log where you ran
- **Visual Map**: See all your running locations

### How to Use Maps:
1. Log a run with a location
2. Click "View Map" button
3. See your running routes on the map

---

## ✨ Full Features

✅ **User Authentication**
- Secure login/registration
- JWT tokens
- Password hashing

✅ **Run Tracking**
- Log distance, time, pace
- Add location and notes
- Track calories burned

✅ **Statistics**
- Total runs
- Total distance
- Average pace
- Total calories
- Real-time updates

✅ **Maps** (NEW!)
- Free OpenStreetMap
- Visual location tracking
- No API key needed

✅ **Beautiful UI**
- Responsive design
- Works on mobile
- Smooth animations
- Modern gradients

---

## 🏗️ Architecture

```
Frontend (React)
    ↓
Backend (Node.js + Express)
    ↓
Database (MongoDB)
    ↓
Maps (Free Leaflet + OpenStreetMap)
```

---

## 📱 Local Testing Before Deploy

Test locally first:

```bash
# Clone repo
git clone https://github.com/omchy915-hash/test.git
cd test

# Install dependencies
npm run install-all

# Create .env in server/
cat > server/.env << EOF
PORT=5000
MONGODB_URI=mongodb_connection_string
JWT_SECRET=secret_key
NODE_ENV=development
EOF

# Start app
npm start
```

Visit: http://localhost:3000

---

## 🔧 Troubleshooting Deployment

**Site shows "Application Error"?**
- Check Render logs for errors
- Verify MONGODB_URI is correct
- Make sure MongoDB cluster is active

**Maps not showing?**
- Check browser console (F12)
- Ensure leaflet is installed
- Verify OpenStreetMap CDN works

**Can't connect to database?**
- Check MongoDB Atlas connection string
- Verify IP whitelist allows all IPs (0.0.0.0/0)
- Test connection in MongoDB Compass

**Port issues?**
- Render auto-assigns PORT env variable
- Server uses: `process.env.PORT || 5000`

---

## 📊 Monitoring

After deployment, monitor at:
- **Render Dashboard**: https://dashboard.render.com
- **MongoDB Atlas**: https://cloud.mongodb.com
- **GitHub**: https://github.com/omchy915-hash/test

---

## 🎯 Next Steps After Going Live

1. ✅ Share your live URL
2. ✅ Invite friends to use it
3. ✅ Start logging your runs
4. ✅ Track your progress
5. ✅ Add new features!

---

## 🚀 Future Enhancements

- [ ] Social features (friend tracking)
- [ ] Performance charts
- [ ] Goal setting
- [ ] Mobile app
- [ ] Weather integration
- [ ] Strava integration
- [ ] Training plans
- [ ] Leaderboards

---

## 📞 Support

- GitHub Issues: https://github.com/omchy915-hash/test/issues
- Render Docs: https://render.com/docs
- MongoDB Help: https://docs.mongodb.com

---

## 🎉 You're All Set!

Your Running Tracker is ready for the world! Deploy it to Render in 5 minutes and start sharing! 🏃‍♂️

**Questions? Check Render's documentation or GitHub issues!**
