const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
  user_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: { type: String, enum: ['aluno', 'professor', 'coordenador'], required: true },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
  permissions: [{ type: String }] 
}); 

UserSchema.pre('save', async function(next) {
  if (this.isModified('password')) {
    this.password = await bcrypt.hash(this.password, 10);
  }
  next();
});

UserSchema.methods.comparePassword = function(password) {
  return bcrypt.compare(password, this.password);
};

module.exports = mongoose.model('User', UserSchema);
