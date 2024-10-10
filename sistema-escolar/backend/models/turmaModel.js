const mongoose = require('mongoose');

const TurmaSchema = new mongoose.Schema({
  class_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
  name: { type: String, required: true },
  year: { type: Number, required: true },
  semester: { type: Number, required: true },
  disciplines_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Disciplina'},
  students_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  coordinator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
 });

module.exports = mongoose.model('Turma', TurmaSchema);