# 🚀 TechItEasy

TechItEasy is a full-stack e-commerce web application built using the MERN stack.  
It allows users to browse tech products, register/login securely, add items to cart, and place orders.

---

## 🛠️ Tech Stack

**Frontend**
- React.js
- React Router
- Axios
- CSS / Tailwind / Bootstrap

**Backend**
- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT Authentication
- bcrypt (Password Hashing)

---

## 📂 Project Structure

```
TechItEasy/
│
├── client/               # React Frontend
│   ├── src/
│   └── package.json
│
├── server/               # Express Backend
│   ├── models/
│   ├── routes/
│   ├── middleware/
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ✨ Features

### 👤 User Features
- User Registration & Login
- Secure JWT Authentication
- Browse Products
- Add to Cart
- Checkout System
- Order History

### 🛠️ Admin Features
- Add / Edit / Delete Products
- Manage Users
- Manage Orders

---

## ⚙️ Installation

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/TechItEasy.git
cd TechItEasy
```

---

### 2️⃣ Install Dependencies

#### Backend

```bash
cd server
npm install
```

#### Frontend

```bash
cd client
npm install
```

---

### 3️⃣ Setup Environment Variables

Create a `.env` file inside the `server` folder:

```
PORT=5000
MONGO_URI=your_mongodb_connection_string
JWT_SECRET=your_secret_key
```

---

### 4️⃣ Run the Application

#### Start Backend

```bash
cd server
npm start
```

#### Start Frontend

```bash
cd client
npm start
```

---

## 🌐 Default Ports

- Frontend → https://techiteasy-ten.vercel.app/  
<!-- - Backend → http://localhost:5000   -->

---

## 🔐 Security

- Password hashing using bcrypt
- JWT-based authentication
- Protected routes middleware
- Environment variable configuration

---

## 🚀 Future Improvements

- Payment Integration (Stripe / Razorpay)
- Wishlist Feature
- Product Reviews & Ratings
- Admin Analytics Dashboard
- Deployment (Vercel + Render)

---

## 🤝 Contributing

1. Fork the repository  
2. Create your feature branch  
3. Commit your changes  
4. Push to the branch  
5. Open a Pull Request  

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

Developed by Dhiraj Verma



## 📸 Screenshots

_Desktop UI Home Page Screenshot_

![Home Page](./screenshots/Home.webp)

```md