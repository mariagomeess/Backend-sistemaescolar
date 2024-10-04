const Comunicado = require('../models/comunicadoModel'); 

exports.createComunicado = async (req, res) => {
    try {
        const comunicado = new Comunicado(req.body);
        await comunicado.save();
        res.status(201).json({ message: 'Comunicado criado com sucesso!', comunicado: comunicado });
    } catch (error) {
        res.status(400).send(error);
    }
};

exports.getComunicados = async (req, res) => {
    try {
        const comunicados = await Comunicado.find().populate('user');
        res.status(200).json(comunicados);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.getComunicadoById = async (req, res) => {
    try {
        const comunicado = await Comunicado.findById(req.params.id).populate('user');
        if (!comunicado) 
            return res.status(404).json({ message: 'Comunicado não encontrado' });
        res.status(200).json(comunicado);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.updateComunicado = async (req, res) => {
    try {
        const comunicado = await Comunicado.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!comunicado) 
            return res.status(404).json({ message: 'Comunicado não encontrado' });
        res.status(200).json({ message: 'Comunicado atualizado com sucesso!', comunicado });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
};

exports.deleteComunicado = async (req, res) => {
    try {
        const comunicado = await Comunicado.findByIdAndDelete(req.params.id);
        if (!comunicado) 
            return res.status(404).json({ message: 'Comunicado não encontrado' });
        res.status(200).json({ message: 'Comunicado deletado com sucesso!' });
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
  };
