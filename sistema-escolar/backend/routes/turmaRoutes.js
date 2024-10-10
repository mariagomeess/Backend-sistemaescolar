const express = require('express');
const {
    getTurmas,
    getTurmaById,
    createTurma,
    updateTurma,
    deleteTurma
  } = require('../controllers/turmaController');
  const authMiddleware = require('../middleware/authMiddleware');
  const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Turmas
 *   description: Operações relacionadas a turmas
 */

/**
 * @swagger
 * /turmas:
 *   post:
 *     summary: Criar uma nova turma
 *     tags: [Turmas]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               year:
 *                 type: number
 *               semester:
 *                 type: number
 *               disciplines_id:
 *                 type: string
 *               students_id:
 *                 type: array
 *                 items:
 *                   type: string
 *               teacher_id:
 *                 type: string
 *               coordinator_id:
 *                 type: string
 *     responses:
 *       201:
 *         description: Turma criada com sucesso
 *       400:
 *         description: Erro ao criar a turma
 */
router.post('/', authMiddleware,createTurma);

/**
 * @swagger
 * /turmas:
 *   get:
 *     summary: Listar todas as turmas
 *     tags: [Turmas]
 *     responses:
 *       200:
 *         description: Lista de turmas
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   name:
 *                     type: string
 *                   year:
 *                     type: number
 *                   semester:
 *                     type: number
 *                   disciplines_id:
 *                     type: string
 *                   students_id:
 *                     type: array
 *                     items:
 *                       type: string
 *                   teacher_id:
 *                     type: string
 *                   coordinator_id:
 *                     type: string
 */
router.get('/', authMiddleware,getTurmas);

/**
 * @swagger
 * /turmas/{id}:
 *   get:
 *     summary: Obter uma turma específica
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da turma
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma encontrada
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 year:
 *                   type: number
 *                 semester:
 *                   type: number
 *                 disciplines_id:
 *                   type: string
 *                 students_id:
 *                   type: array
 *                   items:
 *                     type: string
 *                 teacher_id:
 *                   type: string
 *                 coordinator_id:
 *                   type: string
 *       404:
 *         description: Turma não encontrada
 */
router.get('/:id', authMiddleware,getTurmaById);

/**
 * @swagger
 * /turmas/{id}:
 *   put:
 *     summary: Atualizar uma turma
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da turma
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               year:
 *                 type: number
 *               semester:
 *                 type: number
 *               disciplines_id:
 *                 type: string
 *               students_id:
 *                 type: array
 *                 items:
 *                   type: string
 *               teacher_id:
 *                 type: string
 *               coordinator_id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Turma atualizada com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.put('/:id', authMiddleware,updateTurma);

/**
 * @swagger
 * /turmas/{id}:
 *   delete:
 *     summary: Deletar uma turma
 *     tags: [Turmas]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID da turma
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Turma deletada com sucesso
 *       404:
 *         description: Turma não encontrada
 */
router.delete('/:id', authMiddleware,deleteTurma);

module.exports = router;
