💬 Real-Time Chat Application

🚀 Project Overview

The Real-Time Chat App is a web-based communication platform that enables users to send and receive messages instantly. It is built using HTML, CSS, JavaScript (frontend) and Node.js with Socket.IO (backend) to achieve real-time interaction.


---

🧠 Features

✅ Real-time message sending and receiving
✅ Multiple users can chat simultaneously
✅ Simple and clean chat dashboard
✅ Instant group and private chat updates
✅ Deployed frontend and backend with live URLs


---

⚙️ Tech Stack

Frontend: HTML, CSS, JavaScript
Backend: Node.js, Express.js, Socket.IO
Database: (Optional for message storage — can be added later)
Hosting: Render (backend) & GitHub Pages / Netlify (frontend)


---

🛠️ Project Setup

1️⃣ Clone the Repositories

git clone https://github.com/<your-username>/chat-frontend.git
git clone https://github.com/<your-username>/chat-backend.git

2️⃣ Install Backend Dependencies

cd chat-backend
npm install
npm start

3️⃣ Update Frontend Socket Connection

In script.js, replace:

const socket = io("https://your-backend-url.onrender.com");

With your Render backend URL.


---

🌐 Live Links

Section	Link

🔗 Frontend (GitHub Pages / Netlify)	https://your-frontend-link
🔗 Backend (Render)	https://your-backend-link.onrender.com



---

🧩 Folder Structure

realtime-chat-app/
├── frontend/
│   ├── index.html
│   ├── style.css
│   └── script.js
├── backend/
│   ├── server.js
│   └── package.json
└── README.md


---

📸 Project Screenshots

(Optional — you can upload screenshots here)

1. 🧱 Chat Dashboard


2. 💬 Message Sent & Received


3. 👥 Group Chat Interface

   
---

🧠 Future Enhancements

Store chat messages in MongoDB

Add authentication (JWT)

Add group chat and media sharing




