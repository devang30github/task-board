# Task Board – Fluid AI Python Developer Assignment

A clean, minimal **full-stack Task Board application** built as part of a vibe-coding assignment.

The goal of this project is to demonstrate:
- Clean, structured Python backend code
- Well-designed REST APIs
- Frontend–backend integration
- Thoughtful UI/UX decisions
- Ability to ship a complete, working solution 

---

## ✨ Features

- Add new tasks
- Mark tasks as complete
- Delete tasks
- Toggle task priority ⭐
- Drag & drop tasks to reorder them
- Focus Mode to view only incomplete tasks
- Progress indicator with percentage and progress bar

---

## 🧱 Tech Stack

### Backend
- Python 3.11
- FastAPI
- Node 
- MVC-style project structure
- In-memory data storage (runtime only)

### Frontend
- React (Vite)
- Tailwind CSS
- Fetch API
- Drag-and-drop task reordering

---

## 📁 Project Structure

```
task-board/
├── backend/
│   ├── main.py
│   └── app/
│       ├── models/
│       ├── schemas/
│       ├── services/
│       ├── controllers/
│       └── routes/
│
├── frontend/
│   ├── dist/
│   ├── src
|   ├── index.html
|   ├── package.json
|   ├── postcss.config.js
|   ├── tailwind.config.js
|   └── dist/
│
├── requirements.txt
├── .gitignore
├── Dockerfile
└── README.md
```

---

## 🚀 Running the Application

### Development Mode (Two Servers)

```bash
# Backend
uvicorn backend.main:app --reload

# Frontend
cd frontend
npm install
npm run dev
```

Frontend: http://localhost:5173  
Backend: http://localhost:8000  

---

### Production / Submission Mode (Single Server)

```bash
# Build frontend
cd frontend
npm install
npm run build

# Run backend
uvicorn backend.main:app
```

Open in browser:

http://localhost:8000

FastAPI serves both frontend and backend APIs.

---

## 🐳 Run with Docker (Optional)

```bash
docker build -t task-board .
docker run -p 8000:8000 task-board
```

Open:

http://localhost:8000

---

## 💡 Design Decisions

- MVC architecture for backend clarity and scalability
- Frontend served from the backend to provide a single preview URL
- Relative API paths to support local, Docker, and hosted environments
- Minimal dependencies to keep the solution focused and readable
- In-memory storage to meet assignment constraints and simplify setup

---

## 📌 Notes

- No external database is used
- Task data resets when the server restarts
- The project was intentionally scoped to fit within a tight timebox

---

## 👤 Author

Built as part of a Python developer assignment.
