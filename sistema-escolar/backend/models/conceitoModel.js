const mongoose = require('mongoose');

const conceitoSchema = new mongoose.Schema({
  student: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true },
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  conceito: { type: String, required: true },
  date_recorded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conceito', conceitoSchema);
