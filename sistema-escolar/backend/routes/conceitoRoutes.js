const express = require('express');
const router = express.Router();
const conceitoController = require('../controllers/conceitoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Conceito:
 *       type: object
 *       required:
 *         - student
 *         - description
 *         - teacher
 *         - conceito
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para o conceito
 *         student:
 *           type: string
 *           description: ID do aluno associado ao conceito
 *         description:
 *           type: string
 *           description: ID da disciplina associada ao conceito
 *         teacher:
 *           type: string
 *           description: ID do professor que registrou o conceito
 *         conceito:
 *           type: string
 *           description: Conceito registrado (A, B, C, etc.)
 *         date_recorded:
 *           type: string
 *           format: date-time
 *           description: Data de registro do conceito
 */

/**
 * @swagger
 * tags:
 *   name: Conceitos
 *   description: Operações relacionadas aos conceitos
 */

/**
 * @swagger
 * /api/conceitos:
 *   get:
 *     summary: Retorna a lista de todos os conceitos
 *     tags: [Conceitos]
 *     responses:
 *       200:
 *         description: A lista de conceitos
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Conceito'
 */
router.get('/', conceitoController.getConceitos);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   get:
 *     summary: Retorna um conceito pelo ID
 *     tags: [Conceitos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do conceito
 *     responses:
 *       200:
 *         description: Conceito encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Conceito'
 *       404:
 *         description: Conceito não encontrado
 */
router.get('/:id', conceitoController.getConceitoById);

/**
 * @swagger
 * /api/conceitos:
 *   post:
 *     summary: Registra um novo conceito
 *     tags: [Conceitos]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conceito'
 *     responses:
 *       201:
 *         description: Conceito registrado com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', conceitoController.createConceito);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   put:
 *     summary: Atualiza um conceito existente
 *     tags: [Conceitos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do conceito
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Conceito'
 *     responses:
 *       200:
 *         description: Conceito atualizado com sucesso
 *       404:
 *         description: Conceito não encontrado
 */
router.put('/:id', conceitoController.updateConceito);

/**
 * @swagger
 * /api/conceitos/{id}:
 *   delete:
 *     summary: Remove um conceito pelo ID
 *     tags: [Conceitos]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do conceito
 *     responses:
 *       200:
 *         description: Conceito removido com sucesso
 *       404:
 *         description: Conceito não encontrado
 */
router.delete('/:id', conceitoController.deleteConceito);

module.exports = router;
