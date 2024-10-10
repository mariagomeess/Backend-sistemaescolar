const Turma = require('../models/turmaModel'); 

exports.createTurma = async (req, res) => {
    try {
        const turma = new Turma(req.body);
        await turma.save();
        res.status(201).json({ message: 'Turma criada com sucesso!' , turma: turma });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getTurmas = async (req, res) => {
    try {
        const turmas = await Turma.find().populate('disciplina').populate('user');
        res.status(200).send(turmas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getTurmaById = async (req, res) => {
    try {
        const turma = await Turma.findById(req.params.id).populate('user').populate('turma');
    if (!turma) {
      return res.status(404).json({ message: 'Turma não encontrada' });
    }
    res.json(turma);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

exports.updateTurma = async (req, res) => {
    try {
        const turma = await Turma.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!turma) {
            return res.status(404).json({ message: 'Turma não encontrada' });
        }
        res.status(200).json({ message: 'Turma atualizada com sucesso!', turma });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteTurma = async (req, res) => {
    try {
        const turma = await Turma.findByIdAndDelete(req.params.id);
        if (!turma) {
            return res.status(404).json({ message: 'Turma não encontrada' });
        }
        res.status(200).json({ message: 'Turma deletada com sucesso!' });
    } catch (error) {
        res.status(500).send(error);
    }
};


