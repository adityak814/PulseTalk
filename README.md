# 💬 Real-Time Chat App

A full-stack, real-time chat application built using **React**, **Node.js**, **Express**, **MongoDB**, **Socket.io**, **Tailwind CSS**, and **Zustand**. The app supports **private messaging**, **group chats (channels)**, **file sharing**, **emoji reactions**, and **JWT-based authentication**. It follows modern full-stack architecture and best practices.

---

## 🚀 Features

- 🔐 User signup/login with JWT authentication and secure cookies
- 📸 Profile setup with image upload via Multer
- 💬 Private & group chat (channels) with real-time messaging using Socket.io
- 📁 File sharing with upload/download progress indicators and previews
- 😊 Emoji picker integrated with message input
- 🔍 Live search for contacts and channels
- 📱 Responsive UI with Tailwind CSS and ShadCN

---

## 🛠️ Tech Stack

- **Frontend:** React, Tailwind CSS, Zustand, React Router, ShadCN, Emoji Mart  
- **Backend:** Node.js, Express.js, MongoDB, Multer, Bcrypt, JWT, Socket.io

---

## 🧠 Key Insights

- 🔄 **Full-stack architecture & best practices:**  
  Modular React frontend, MVC backend structure, Zustand for global state, and reusable components.

- 🔐 **JWT authentication & route protection:**  
  Auth tokens stored in HTTP-only cookies with route guards using React Router.

- 🌐 **Socket.io-powered real-time chat:**  
  Efficient user-socket mapping, direct & group message broadcasting, disconnection handling.

- 📁 **File uploads & downloads:**  
  Multer for server-side handling, real-time upload/download UI with Axios progress tracking.

- 👨‍👩‍👧‍👦 **Group chat channels:**  
  Channel model with admin/member structure, message population, and multi-user broadcasts.

- 🧩 **Modern UI with third-party integrations:**  
  ShadCN, emoji picker, multi-select combo boxes—highly interactive and customizable components.

---

## 🔍 Core Functionalities

### 🔐 Authentication & Authorization
- Signup/login with validation and bcrypt password hashing
- JWT tokens with 3-day expiry, stored in cookies
- Route protection via React Router + Zustand

### 👤 Profile Management
- Mandatory profile setup post-authentication
- Image upload with Multer, edit/remove profile data with instant UI updates

### 💬 Real-Time Messaging
- Socket.io-based direct & channel messaging
- MongoDB stores messages with proper referencing
- Real-time state updates via socket listeners

### 👥 Group Chat Channels
- Admin/member management with multi-select
- MongoDB schema for channels and messages
- Real-time broadcasts to all connected members

### 📁 File Handling
- Uploads via Multer stored by date on server
- Progress bars, previews, zoom/download support
- Dynamic file type rendering for other docs/media

### 🎨 Responsive UI
- Built with Tailwind CSS and ShadCN
- Mobile-first layout with modals, tooltips, and drawers
- Emoji support and media previews in chat

