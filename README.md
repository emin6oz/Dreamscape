# Dreamscape 

## 🌙 What is Dreamscape?

Dreamscape is a restful sleep optimization app that uses object recognition to provide personalized tips for improving sleep quality. It features calming soundscapes, customizable user profiles, and backend analytics. Built in collaboration with IKEA, Dreamscape helps users build better nighttime routines by combining design, tech, and wellness.

---

### ✨ Features
#### -Interactive Sleep Survey Flow: Guides users through a multi-step onboarding experience to personalize their sleep tips
#### -Object Recognition Integration: Uses machine learning to analyze room elements and suggest improvements
#### -IKEA Web Connection: After scanning room elements, users receive product suggestions linked to the IKEA website
#### -Relaxing Music Screen: Curated calming soundscapes
#### -Custom Profile Page: Tracks challanges and bedtime goals
#### -Sleep Tracker Screen: Lets users schedule bedtime and alarms for optimized rest routines
#### -Smooth Animations: Subtle transitions and motion to enhance the relaxing experience
#### -Sign in and sign up funcionality 
#### -Laravel API Integration: Backend handles sleep session tracking and data logic 

---
### 🛠 Tech Stack
### Frontend:

-  React 18

-  Vite

-  TailwindCSS

-  TensorFlow.js (Sleep Model)

-  SCSS

-  React Router

### Backend:

-  Laravel 12

-  PHP 8

-  SQLite (local dev)

-  RESTful API (Laravel Controllers)

-  Composer
  
---

### 🚀 Getting Started
###  Prerequisites 
(For local development and testing purposes. Make sure you have both the frontend and backend running.)
Node.js (v16 or higher)

- npm

- PHP 8+

-  Composer

---

## ⚙️ Installation
### 1. Clone the Dreamscape repo (Front-end branch)

```bash
git clone --branch Front-end https://github.com/emin6oz/Dreamscape.git
cd Dreamscape
```

### 2. Frontend Setup 
```bash
cd Dreamscape-Front-end
npm install
npm run dev
```
```bash
If using the Laravel backend locally, update vite.config.js with a proxy:

server: {
  proxy: {
    '/api': 'http://127.0.0.1:8000'
  }
}
```
### 3. Backend Setup
```bash
cd DreamscapeBackend-main
composer install
cp .env.example .env
php artisan key:generate
touch database/database.sqlite
php artisan migrate
php artisan serve
```
> Make sure your .env includes: 
```bash
DB_CONNECTION=sqlite
DB_DATABASE=/absolute/path/to/database/database.sqlite
```
---
### 🧪 Environment Variables

> See .env.example in the backend folder to configure local database and Laravel settings. You do not need any third-party keys to run the project locally.

---

### 📁 Project Structure

### Frontend (React + Vite) 
```bash
src/
├── App.jsx                # Main app wrapper
├── components/           # Shared UI elements
├── pages/                # Survey, Profile, Music, Alarm screens
├── tm-model/             # TensorFlow model for object recognition
├── assets/               # Sounds, icons
└── index.css             # Global styles
```
### Backend (Laravel) 
```bash
app/
├── Http/Controllers/     # API endpoints (e.g. UserController, IkeaController)
database/
├── database.sqlite       # SQLite database file
routes/
├── api.php               # Route definitions for frontend communication
.env                      # Laravel environment configuration
```
---
### 🛠 Scripts

### Frontend

- `npm run dev` — Start Vite development server

- `npm run build` — Build for production

### Backend

- `php artisan serve` — Start Laravel server

- `php artisan migrate` — Run DB migrations

---

  ### 🙏 Acknowledgments
  - [IKEA](https://www.ikea.com/) – for creative partnership and inspiration
  - [Teachablemachine](https://teachablemachine.withgoogle.com/)- For creating scanning feature
  - [Laravel](https://laravel.com/) – backend framework  
  - [TailwindCSS](https://tailwindcss.com/) – for utility-first UI styling 
---
<p align="center"><i> 💙 Made by the best team : Emine, Agata and Filip 💙</i></p>
