const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());

// MongoDB Connection
mongoose.connect('mongodb://localhost:27017/registration-app', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// User Schema
const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
});

const User = mongoose.model('User', userSchema);

// Registration Route
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Parolni hash qilish
  const hashedPassword = await bcrypt.hash(password, 10);

  try {
    const user = new User({
      username,
      password: hashedPassword,
    });

    await user.save();
    res.status(201).send('Foydalanuvchi muvaffaqiyatli ro\'yxatdan o\'tdi');
  } catch (error) {
    res.status(400).send('Ro\'yxatdan o\'tishda xato');
  }
});

// Login Route
app.post('/login', async (req, res) => {
  const { username, password } = req.body;

  try {
    const user = await User.findOne({ username });
    if (!user) return res.status(400).send('Foydalanuvchi topilmadi');

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return res.status(400).send('Parol noto\'g\'ri');

    // Token yaratish
    const token = jwt.sign({ id: user._id }, 'secretkey', { expiresIn: '1h' });

    res.json({ token });
  } catch (error) {
    res.status(500).send('Xato yuz berdi');
  }
});

// Serverni ishga tushirish
app.listen(port, () => {
  console.log(`Server http://localhost:${port} da ishlamoqda`);
});
document.addEventListener('DOMContentLoaded', () => {
    const loginButton = document.querySelector('#staticBackdrop .btn-primary');
    const modalCloseButton = document.querySelector('#staticBackdrop .btn-close');
    const sendButton = document.querySelector('#staticBackdrop .btn-primary');
  
    // Modalni yuborish uchun click event
    sendButton.addEventListener('click', async () => {
      const username = document.querySelector('#staticBackdrop input[type="text"]').value;
      const password = document.querySelector('#staticBackdrop input[type="password"]').value;
  
      const response = await fetch('/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password })
      });
  
      const data = await response.json();
  
      if (response.ok) {
        alert('Muvaffaqiyatli login qilindi');
        console.log('Token:', data.token); // Tokenni foydalanish uchun
      } else {
        alert('Loginda xato');
      }
    });
  
    // Modalni yopish uchun click event
    modalCloseButton.addEventListener('click', () => {
      document.querySelector('#staticBackdrop').classList.remove('show');
    });
  
    // Modalni ochish
    document.querySelector('.btn-primary2').addEventListener('click', () => {
      document.querySelector('#staticBackdrop').classList.add('show');
    });
  });
  