const express = require('express');
const router = express.Router();
const turmaController = require('../controllers/turmaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Turma:
 *       type: object
 *       required:
 *         - name
 *         - year
 *         - semester
 *         - coordinator
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para a turma
 *         name:
 *           type: string
 *           description: Nome da turma
 *         year:
 *           type: number
 *           description: Ano letivo
 *         semester:
 *           type: number
 *           description: Semestre letivo
 *         disciplines:
 *           type: string
 *           description: ID da disciplina associada
 *         students:
 *           type: string
 *           description: ID dos alunos associados à turma
 *         teacher:
 *           type: string
 *           description: ID do professor da turma
 *         coordinator:
 *           type: string
 *           description: ID do coordenador da turma
 */

/**
 * @swagger
 * tags:
 *   name: Turmas
 *   description: Operações relacionadas às turmas
 */

/**
 * @swagger
 * /api/turmas:
 *   get:
 *     summary: Retorna a lista de todas as turmas
 *     tags: [Turmas]
 *     responses:
 *       200:
 *         description: A lista de turmas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Turma'
 */
router.get('/', turmaController.getTurmas);

/**
 * @swagger
 * /api/turmas/{id}:
 *   get:
 *     summary: Retorna uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Turma encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Turma'
 *       404:
 *         description: Turma não encontrada
 */
router.get('/:id', turmaController.getTurmaById);

/**
 * @swagger
 * /api/turmas:
 *   post:
 *     summary: Cria uma nova turma
 *     tags: [Turmas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', turmaController.createTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   put:
 *     summary: Atualiza uma turma existente
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Turma'
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.put('/:id', turmaController.updateTurma);

/**
 * @swagger
 * /api/turmas/{id}:
 *   delete:
 *     summary: Remove uma turma pelo ID
 *     tags: [Turmas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da turma
 *     responses:
 *       200:
 *         description: Turma removida com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.delete('/:id', turmaController.deleteTurma);

module.exports = router;
