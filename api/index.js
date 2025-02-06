const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const crypto = require('crypto');
const nodemailer = require('nodemailer');
const cors = require('cors');
const jwt = require('jsonwebtoken');

const app = express();
const port = 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const User = require('./models/user');
const Post = require('./models/post');

mongoose.connect('mongodb+srv://Vanii2210:23092330aA@cluster0.1a7it.mongodb.net/', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Connected to MongoDB');
}).catch((err) => {
  console.log('Failed to connect to MongoDB', err);
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Endpoint to register a user within the backend
app.post('/register', async (req, res) => {
  try {
    const { name, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: 'User already registered' });
    }

    // Creating user
    const newUser = new User({ name, email, password });

    // Generate and store verification token
    newUser.verificationToken = crypto.randomBytes(20).toString('hex');

    // Save the user to the database
    await newUser.save();

    // Send the verification email to the user
    sendVerificationEmail(newUser.email, newUser.verificationToken);

    res.status(200).json({ message: 'Registration Successful' });

  } catch (err) {
    console.log('Error registering user', err);
    res.status(500).json({ message: 'Error creating user' });
  }
});

const sendVerificationEmail = async (email, verificationToken) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'anh23092330a3@gmail.com',
      pass: 'gprtqtsvywenzota',
    },
  });

  const mailOptions = {
    from: 'testapp.com',
    to: email,
    subject: 'Verification Completed',
    text: `Click the link to verify your account http://localhost:3000/verify/${verificationToken}`,
  };

  try {
    await transporter.sendMail(mailOptions);
  } catch (err) {
    console.log('Error sending verification email', err);
  }
};

app.get('/verify/:token', async (req, res) => {
  try {
    const token = req.params.token;

    const user = await User.findOne({ verificationToken: token });
    if (!user) {
      return res.status(404).json({ message: 'Invalid Token' });
    }

    user.verified = true;
    user.verificationToken = undefined;
    await user.save();

    res.status(200).json({ message: 'Email Verified' });
  } catch (err) {
    console.log('Error getting token', err);
    res.status(500).json({ message: 'Email verification failed' });
  }
});

const generateSecretKey = () => {
  return crypto.randomBytes(32).toString('hex');
};
const secretKey = generateSecretKey(); // Replace with your actual secret key

app.post('/login', async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    if (user.password !== password) {
      return res.status(404).json({ message: 'Wrong password' });
    }

    const token = jwt.sign({ userId: user._id }, secretKey);

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Login failed' });
  }
});