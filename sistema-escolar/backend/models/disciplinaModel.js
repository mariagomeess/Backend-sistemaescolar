const mongoose = require('mongoose');

const DisciplinaSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  classes: { type: mongoose.Schema.Types.ObjectId, ref: 'Turma'},
  teacher: { type: mongoose.Schema.Types.ObjectId, ref: 'User'},
  coordinator: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
});

module.exports = mongoose.model('Disciplina', DisciplinaSchema);
