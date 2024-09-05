const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const app = express();

// MongoDB bilan ulanish
mongoose.connect('mongodb://localhost:27017/', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

// Schema va Model
const UserSchema = new mongoose.Schema({
  username: String,
  password: String
});

const User = mongoose.model('User', UserSchema);

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.set('view engine', 'ejs');

// Ro'yxatdan o'tish sahifasi
app.get('/register', (req, res) => {
  res.render('register');
});

// Ro'yxatdan o'tish ma'lumotlarini qabul qilish
app.post('/register', async (req, res) => {
  const { username, password } = req.body;
  const newUser = new User({ username, password });
  await newUser.save();
  res.redirect('/success');
});

// Muvaffaqiyatli ro'yxatdan o'tish sahifasi
app.get('/success', (req, res) => {
  res.send('Siz muvaffaqiyatli ro\'yxatdan o\'tdingiz!');
});

app.listen(3000, () => {
  console.log('Server ishlayapti: http://localhost:3000');
});
