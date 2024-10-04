const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['aluno', 'professor', 'coordenador'], required: true },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
  telefone: { type: String, required: true },
  cpf: { type: String, required: true, unique: true },
  permissions: [{ type: String }] 
}); 

module.exports = mongoose.model('User', UserSchema);
