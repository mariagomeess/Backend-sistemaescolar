const mongoose = require('mongoose');

const comunicadoSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  data_created: { type: Date, default: Date.now },
  turmas: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Turma' }], // Turmas específicas para o comunicado
  alunos: [{ type: mongoose.Schema.Types.ObjectId, ref: 'User' }], // Alunos específicos para o comunicado
  data_emissao: { type: Date, default: Date.now } // Data de emissão do comunicado
});

module.exports = mongoose.model('Comunicado', comunicadoSchema);
