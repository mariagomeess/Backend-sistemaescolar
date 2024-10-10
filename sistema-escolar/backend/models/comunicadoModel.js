const mongoose = require('mongoose');

const comunicadoSchema = new mongoose.Schema({
  comunicado_id: { type: mongoose.Schema.Types.ObjectId, auto: true},
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  data_created: { type: Date, default: Date.now },
  status: { type: String, enum: ['ativo', 'inativo'], default: 'ativo' },
});

module.exports = mongoose.model('Comunicado', comunicadoSchema);
