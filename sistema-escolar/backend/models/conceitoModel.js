const mongoose = require('mongoose');

const conceitoSchema = new mongoose.Schema({
  conceito_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  description: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina', required: true },
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  conceito: { type: String, required: true },
  date_recorded: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Conceito', conceitoSchema);
