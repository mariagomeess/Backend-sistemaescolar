const express = require('express');
const { getDisciplinas, getDisciplinaById, createDisciplina, updateDisciplina, deleteDisciplina } = require('../controllers/disciplinaController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Disciplinas
 *   description: CRUD para disciplinas
 */

/**
 * @swagger
 * path:
 *  /disciplinas:
 *    post:
 *      tags: [Disciplinas]
 *      summary: Criar uma nova disciplina
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: Nome da disciplina
 *                description:
 *                  type: string
 *                  description: Descrição da disciplina
 *                classes_id:
 *                  type: string
 *                  description: ID da turma
 *                teacher_id:
 *                  type: string
 *                  description: ID do professor
 *                coordinator_id:
 *                  type: string
 *                  description: ID do coordenador
 *      responses:
 *        201:
 *          description: Disciplina criada com sucesso
 *        400:
 *          description: Erro ao criar disciplina
 *
 *    get:
 *      tags: [Disciplinas]
 *      summary: Listar todas as disciplinas
 *      responses:
 *        200:
 *          description: Lista de disciplinas
 *        500:
 *          description: Erro ao listar disciplinas
 *
 *  /disciplinas/{id}:
 *    get:
 *      tags: [Disciplinas]
 *      summary: Obter uma disciplina pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID da disciplina
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Disciplina encontrada
 *        404:
 *          description: Disciplina não encontrada
 *
 *    put:
 *      tags: [Disciplinas]
 *      summary: Atualizar uma disciplina pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID da disciplina
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                name:
 *                  type: string
 *                  description: Nome da disciplina
 *                description:
 *                  type: string
 *                  description: Descrição da disciplina
 *                classes_id:
 *                  type: string
 *                  description: ID da turma
 *                teacher_id:
 *                  type: string
 *                  description: ID do professor
 *                coordinator_id:
 *                  type: string
 *                  description: ID do coordenador
 *      responses:
 *        200:
 *          description: Disciplina atualizada com sucesso
 *        404:
 *          description: Disciplina não encontrada
 *        400:
 *          description: Erro ao atualizar disciplina
 *
 *    delete:
 *      tags: [Disciplinas]
 *      summary: Deletar uma disciplina pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID da disciplina
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Disciplina deletada com sucesso
 *        404:
 *          description: Disciplina não encontrada
 *        500:
 *          description: Erro ao deletar disciplina
 */

router.post('/', authMiddleware,createDisciplina);
router.get('/', authMiddleware,getDisciplinas);
router.get('/:id', authMiddleware,getDisciplinaById);
router.put('/:id', authMiddleware,updateDisciplina);
router.delete('/:id', authMiddleware,deleteDisciplina);

module.exports = router;
