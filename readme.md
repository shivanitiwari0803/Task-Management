# Task Management App

##  Overview

This is a full-stack Task Management Application built using the MERN stack. It allows users to create, update, delete, and view tasks with a clean dark-themed UI.

---

##  Features

* Create new tasks
* Update existing tasks
* Delete tasks
* View all tasks
* Error handling in backend
* Responsive dark UI with Tailwind CSS

---

##  Tech Stack

### Frontend:

* React.js (Vite)
* Tailwind CSS
* Axios

### Backend:

* Node.js
* Express.js
* MongoDB (Mongoose)

---

##  Folder Structure

* `/backend` → API, database, controllers
* `/frontend` → UI components and pages

Task-Management-App/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   │   └── database.js
│   │   ├── controllers/
│   │   │   └── task.controller.js
│   │   ├── models/
│   │   │   └── Task.js
│   │   ├── routes/
│   │   │   └── task.routes.js
│   │   ├── middleware/
│   │   │   └── error.middleware.js
│   │   └── app.js
│   │
│   ├── server.js
│   ├── package.json
│   ├── .env
│   └── .gitignore
│
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── TaskForm.jsx
│   │   │   └── TaskList.jsx
│   │   ├── pages/
│   │   │   └── Home.jsx
│   │   ├── services/
│   │   │   └── Api.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── package.json
│   └── vite.config.js
│
└── README.md
---

## ⚙️ Installation & Setup

### 1. Clone the repository

```bash
git clone https://github.com/shivanitiwari0803/Task-Management
cd Task-Management-App
```

### 2. Backend Setup

```bash
cd backend
npm install
```

Create `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

Run backend:

```bash
npm run dev
```

---

### 3. Frontend Setup

```bash
cd frontend
npm install
npm run dev
```

---

## 🔗 API Endpoints

| Method | Endpoint       | Description   |
| ------ | -------------- | ------------- |
| GET    | /api/tasks     | Get all tasks |
| POST   | /api/tasks     | Create task   |
| PUT    | /api/tasks/:id | Update task   |
| DELETE | /api/tasks/:id | Delete task   |

---


##  Future Improvements

* User authentication (Login/Signup)
* Drag & drop tasks
* Notifications

---

##  Author

Shivani Tiwari
