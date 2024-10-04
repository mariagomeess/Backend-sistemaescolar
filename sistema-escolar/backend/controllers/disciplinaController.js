const Disciplina = require('../models/disciplinaModel'); 

exports.createDisciplina = async (req, res) => {
    try {
        const disciplina = new Disciplina(req.body);
        await disciplina.save();
        res.status(201).json({ message: 'Disciplina criada com sucesso!', disciplina: disciplina });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getDisciplinas = async (req, res) => {
    try {
        const disciplinas = await Disciplina.find().populate('user');
        res.status(200).json(disciplinas);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

exports.getDisciplinaById = async (req, res) => {
    try {
        const disciplina = await Disciplina.findById(req.params.id).populate('user');
        if (!disciplina) 
            return res.status(404).json({ message: 'Disciplina não encontrada' });
        res.status(200).json(disciplina);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateDisciplina = async (req, res) => {
    try {
        const disciplina = await Disciplina.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!disciplina) {
            return res.json({ message: 'Disciplina não encontrada' });
        }
        res.send(disciplina);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteDisciplina = async (req, res) => {
    try {
        const disciplina = await Disciplina.findByIdAndDelete(req.params.id);
        if (!disciplina) 
            return res.status(404).json({ message: 'Disciplina não encontrada' });
        res.status(200).json({ message: 'Disciplina deletada com sucesso!' });
    } catch (error) {
        res.status(500).send(error);
    }
};
