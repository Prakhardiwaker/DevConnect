# 💼 DevConnect – A Developer Social Network

DevConnect is a full-featured **MERN (MongoDB, Express, React, Node.js)** stack application that allows developers to create profiles, connect with others, share posts, and showcase their professional experience and education.

---

## 🚀 Live Demo

> _Coming Soon..._

---

## 🌟 Features

- 🔐 **User Authentication** with JWT and protected routes
- 🧑‍💼 **Developer Profiles** with bio, skills, experience, and education
- 📝 **Post Feed** where users can create posts, like, and comment
- 👥 **All Developer Profiles** page with GitHub integration
- 🛠️ **Redux State Management**
- 📣 **Alert System** for form submissions and errors
- ⚙️ **Private Routes** for dashboard and post creation
- 🎨 **Styled with Plain CSS** for a clean UI

---

## 🛠️ Tech Stack

### 🔹 Frontend

- React
- React Router DOM
- Redux & Redux Thunk
- Axios
- Plain CSS

### 🔹 Backend

- Node.js
- Express.js
- MongoDB (with Mongoose)
- JWT for Authentication
- Bcrypt for Password Hashing
- Express Validator

---
```
## 📂 Project Structure
devconnect/
├── client/ # React frontend
│ ├── public/
│ └── src/
│ ├── actions/ # Redux action creators
│ ├── components/ # Reusable components
│ ├── pages/ # Route-level components
│ ├── reducers/ # Redux reducers
│ ├── store.js # Redux store config
│ ├── App.js # App entry point
│ └── index.js
│
├── server/ # Node.js backend
│ ├── config/ # DB config & middleware
│ ├── controllers/ # Route controllers
│ ├── middleware/ # Auth, error handlers
│ ├── models/ # Mongoose models
│ ├── routes/ # Express routes
│ ├── utils/ # Utility functions
│ ├── server.js # Server entry point
│
├── .gitignore
├── package.json # Backend dependencies
├── README.md

```
---

---


## 💻 Installation & Setup Instructions

### 🔧 Prerequisites

- Node.js (v18+)
- MongoDB (Atlas or Local)
- Git

### 📥 Clone the Repository

```bash
git clone https://github.com/your-username/devconnect.git
cd devconnect
```
---

Check out the images of the final application in the images folder.

---

Let me know if you want to:

- Add hosting/deployment steps (e.g., Vercel + Render)
- Include `.env.example`
- Convert this into a `README.md` file
- Add GitHub badges (stars, forks, license, etc.)

Also, rename and move your screenshots into `assets/screenshots/` and remove the `.crdownload` extension for them to work properly.

