# 🍽️ ZESTO - Cloud Native Food Delivery Platform

## 🚀 Overview

ZESTO is a full-stack food delivery web application designed to provide a seamless food ordering experience while demonstrating modern software development and DevOps practices.

The project includes a responsive frontend, RESTful backend APIs, MongoDB database integration, Docker containerization, automated CI/CD pipelines using Jenkins, and deployment on AWS EC2.

---

## 📸 Project Architecture

```text
User Browser
      │
      ▼
Frontend (HTML, CSS, JavaScript)
      │
      ▼
Backend (Node.js + Express.js)
      │
      ▼
MongoDB Atlas
      │
      ▼
Docker Container
      │
      ▼
AWS EC2 Instance
```

---

## 🛠️ Tech Stack

### Frontend

* HTML5
* CSS3
* JavaScript (ES6)

### Backend

* Node.js
* Express.js

### Database

* MongoDB Atlas

### DevOps & Cloud

* Docker
* Jenkins
* AWS EC2
* Git
* GitHub

---

## ✨ Features

### Customer Features

* Browse food items
* Add items to cart
* Remove items from cart
* Place food orders
* View order history
* Responsive UI for desktop and mobile

### Technical Features

* RESTful API architecture
* MongoDB integration
* Dockerized deployment
* Jenkins CI/CD pipeline
* Cloud deployment on AWS EC2
* Automated build and deployment workflow

---

## 🔄 CI/CD Pipeline

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
Jenkins Pipeline
    │
    ▼
Build Application
    │
    ▼
Docker Image Creation
    │
    ▼
Deploy Container
    │
    ▼
AWS EC2 Server
```

---

## 📂 Project Structure

```text
Food-Delivery-App/
│
├── public/
│   ├── index.html
│   ├── menu.html
│   ├── cart.html
│   ├── orders.html
│   ├── about.html
│   ├── style.css
│   └── cart.js
│
├── routes/
│   └── orderRoutes.js
│
├── models/
│   └── Order.js
│
├── config/
│   └── db.js
│
├── server.js
├── Dockerfile
├── Jenkinsfile
├── package.json
└── README.md
```

---

## ⚙️ Installation

### Clone Repository

```bash
git clone https://github.com/your-username/Food-Delivery-App.git

cd Food-Delivery-App
```

### Install Dependencies

```bash
npm install
```

### Configure Environment Variables

Create a `.env` file:

```env
MONGO_URI=your_mongodb_connection_string
PORT=3000
```

### Run Application

```bash
npm start
```

Application:

```text
http://localhost:3000
```

---

## 🐳 Docker Deployment

### Build Docker Image

```bash
docker build -t food-app .
```

### Run Container

```bash
docker run -d \
-p 3000:3000 \
--name food-app \
food-app
```

---

## ☁️ AWS Deployment

The application is deployed on:

* AWS EC2 (Ubuntu)
* Docker Container
* MongoDB Atlas Database

Deployment is automated through Jenkins CI/CD pipeline.

---

## 📚 Learning Outcomes

Through this project, I gained hands-on experience with:

* Full Stack Web Development
* REST API Development
* MongoDB Atlas Integration
* Docker Containerization
* Jenkins CI/CD Automation
* AWS EC2 Deployment
* Linux Server Administration
* Production Troubleshooting

---

## 🔮 Future Enhancements

* Kubernetes Deployment
* Terraform Infrastructure as Code
* Load Balancing
* HTTPS with SSL
* User Authentication
* Payment Gateway Integration
* Monitoring & Logging
* Auto Scaling Infrastructure

---

## 👨‍💻 Author

**Saurabh Pawar**

Electronics & Telecommunication Engineer

Passionate about:

* DevOps
* Cloud Computing
* AWS
* Docker
* CI/CD Automation
* Full Stack Development

---

## ⭐ Support

If you found this project helpful, please consider giving it a ⭐ on GitHub.
