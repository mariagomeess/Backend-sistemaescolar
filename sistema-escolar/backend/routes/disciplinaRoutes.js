const express = require('express');
const router = express.Router();
const disciplinaController = require('../controllers/disciplinaController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Disciplina:
 *       type: object
 *       required:
 *         - name
 *         - description
 *         - coordinator
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para a disciplina
 *         name:
 *           type: string
 *           description: Nome da disciplina
 *         description:
 *           type: string
 *           description: Descrição da disciplina
 *         classes:
 *           type: string
 *           description: ID da turma associada
 *         teacher:
 *           type: string
 *           description: ID do professor responsável pela disciplina
 *         coordinator:
 *           type: string
 *           description: ID do coordenador da disciplina
 */

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: Operações relacionadas às disciplinas
 */

/**
 * @swagger
 * /api/disciplinas:
 *   get:
 *     summary: Retorna a lista de todas as disciplinas
 *     tags: [Disciplinas]
 *     responses:
 *       200:
 *         description: A lista de disciplinas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Disciplina'
 */
router.get('/', disciplinaController.getDisciplinas);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   get:
 *     summary: Retorna uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da disciplina
 *     responses:
 *       200:
 *         description: Disciplina encontrada com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Disciplina'
 *       404:
 *         description: Disciplina não encontrada
 */
router.get('/:id', disciplinaController.getDisciplinaById);

/**
 * @swagger
 * /api/disciplinas:
 *   post:
 *     summary: Cria uma nova disciplina
 *     tags: [Disciplinas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Disciplina'
 *     responses:
 *       201:
 *         description: Disciplina criada com sucesso
 *       400:
 *         description: Dados inválidos
 */
router.post('/', disciplinaController.createDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   put:
 *     summary: Atualiza uma disciplina existente
 *     tags: [Disciplinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da disciplina
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Disciplina'
 *     responses:
 *       200:
 *         description: Disciplina atualizada com sucesso
 *       404:
 *         description: Disciplina não encontrada
 */
router.put('/:id', disciplinaController.updateDisciplina);

/**
 * @swagger
 * /api/disciplinas/{id}:
 *   delete:
 *     summary: Remove uma disciplina pelo ID
 *     tags: [Disciplinas]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID da disciplina
 *     responses:
 *       200:
 *         description: Disciplina removida com sucesso
 *       404:
 *         description: Disciplina não encontrada
 */
router.delete('/:id', disciplinaController.deleteDisciplina);

module.exports = router;
