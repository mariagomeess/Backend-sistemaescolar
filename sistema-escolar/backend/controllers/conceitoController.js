const Conceito = require('../models/conceitoModel'); 

exports.createConceito = async (req, res) => {
    try {
        const conceito = new Conceito(req.body);
        await conceito.save();
        res.status(201).json({ message: 'Conceito registrado com sucesso!', conceito: conceito });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getConceitos = async (req, res) => {
    try {
        const conceitos = await Conceito.find();
        res.status(200).send(conceitos);
    } catch (error) {
        res.status(500).send(error);
    }
};

exports.getConceitoById = async (req, res) => {
    try {
        const conceito = await Conceito.findById(req.params.id);
        if (!conceito) return res.status(404).json({ message: 'Conceito não encontrado' });
        res.status(200).json(conceito);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateConceito = async (req, res) => {
    try {
        const conceito = await Conceito.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!conceito) {
            return res.status(404).json({ message: 'Conceito não encontrado' });
        }
        res.status(200).json({ message: 'Conceito atualizado com sucesso!', conceito });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteConceito = async (req, res) => {
    try {
        const conceito = await Conceito.findByIdAndDelete(req.params.id);
        if (!conceito) {
            return res.status(404).json({ message: 'Conceito não encontrado' });
        }
        res.status(200).json({ message: 'Conceito deletado com sucesso!' });
    } catch (error) {
        res.status(500).send(error);
    }
};
