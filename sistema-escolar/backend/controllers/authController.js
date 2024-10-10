const jwt = require('jsonwebtoken');
const User = require('../models/userModel');
const config = require('../config/jwt');

exports.register = async (req, res) => {
  try {
    const { username, password, role } = req.body;  
    const user = new User({ username, password, role });   
    await user.save();
    res.status(201).json({ message: 'User registered successfully' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;
    const user = await User.findOne({ username });

    if (!user || !(await user.comparePassword(password))) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Gera o token JWT incluindo o role do usuário
    const token = jwt.sign(
      { id: user._id, role: user.role },  // Inclui o 'role' no token
      config.secret,
      { expiresIn: '1h' }
    );
    res.json({ token, role: user.role });  // Retorna o token e a função
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
