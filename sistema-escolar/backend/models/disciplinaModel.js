const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  disciplines_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
  name: { type: String, required: true },
  description: { type: String, required: true },
  classes_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma'},
  teacher_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  coordinator_id: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
