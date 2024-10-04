const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  disciplines: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina'},
  students: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 });

module.exports = mongoose.model('Turma', TurmaSchema);