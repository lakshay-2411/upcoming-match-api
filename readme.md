# Soccer Matches - Full Stack Application

A modern, responsive web application for displaying upcoming soccer matches with infinite scrolling functionality.

## 🚀 Features

- **Clean, Modern UI** - Built with React and Tailwind CSS
- **Infinite Scrolling** - Seamlessly load more matches as you scroll
- **Responsive Design** - Works perfectly on desktop, tablet, and mobile
- **Real-time Updates** - Refresh functionality to get latest matches
- **Error Handling** - Graceful error handling with retry options
- **Loading States** - Beautiful loading spinners and states
- **RESTful API** - Well-structured backend with proper routing

## 🏗️ Project Structure

```
project/
├── backend/
│   ├── server.js
│   ├── routes/
│   │   └── matches.js           
│   ├── controllers/
│   │   └── matchController.js   
│   └── services/
│       └── matchService.js     
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.js         
    │   │   ├── MatchesList.js    
    │   │   ├── MatchCard.js      
    │   │   ├── LoadingSpinner.js 
    │   │   └── Footer.js         
    │   ├── services/
    │   │   └── api.js           
    │   ├── App.js               
    │   ├── index.js             
    │   └── index.css            
    └── public/
        └── index.html
```

## 🛠️ Tech Stack

### Backend
- **Node.js** - Runtime environment
- **Express.js** - Web framework
- **Axios** - HTTP client for external API calls
- **CORS** - Cross-origin resource sharing

### Frontend
- **React 18** - UI library with hooks
- **Tailwind CSS** - Utility-first CSS framework
- **Modern JavaScript** - ES6+ features

### API Used
```bash
https://api.football-data.org/v4
```

## 📦 Installation & Setup

```bash
git clone https://github.com/lakshay-2411/upcoming-match-api.git
```

### Backend Setup

1. Navigate to the backend directory:
```bash
cd backend
```

2. Install dependencies:
```bash
npm install
```

3. Start the backend server:
```bash
npm run dev
```

The backend will run on `http://localhost:5000`

### Frontend Setup

1. Navigate to the frontend directory:
```bash
cd frontend
```

2. Install dependencies:
```bash
npm install
```

3. Start the frontend development server:
```bash
npm run dev
```

The frontend will run on `http://localhost:5173`

## 🎯 API Endpoints

### Backend Routes

- `GET /api/health` - Health check endpoint
- `GET /api/matches` - Get paginated list of upcoming matches
  - Query parameters: `page`, `limit`, `league`
- `GET /api/matches/:id` - Get specific match details

## ✨ Key Features Explained

### Infinite Scrolling
- Automatically loads more matches when user scrolls near the bottom
- Smooth loading states with spinners
- Prevents duplicate API calls during loading

### Responsive Design
- Mobile-first approach with Tailwind CSS
- Flexible grid layouts that adapt to screen size
- Touch-friendly interface elements

### Error Handling
- Network error recovery with retry options
- User-friendly error messages
- Graceful fallbacks for missing data