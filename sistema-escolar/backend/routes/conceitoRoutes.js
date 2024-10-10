const express = require('express');
const { getConceitos, getConceitoById, createConceito, updateConceito, deleteConceito } = require('../controllers/conceitoController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Conceitos
 *   description: CRUD para conceitos
 */

/**
 * @swagger
 * path:
 *  /conceitos:
 *    post:
 *      tags: [Conceitos]
 *      summary: Criar um novo conceito
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                student_id:
 *                  type: string
 *                  description: ID do estudante
 *                description:
 *                  type: string
 *                  description: ID da disciplina
 *                teacher_id:
 *                  type: string
 *                  description: ID do professor
 *                conceito:
 *                  type: string
 *                  description: O conceito a ser registrado
 *      responses:
 *        201:
 *          description: Conceito registrado com sucesso
 *        400:
 *          description: Erro ao registrar conceito
 *
 *    get:
 *      tags: [Conceitos]
 *      summary: Listar todos os conceitos
 *      responses:
 *        200:
 *          description: Lista de conceitos
 *        500:
 *          description: Erro ao listar conceitos
 *
 *  /conceitos/{id}:
 *    get:
 *      tags: [Conceitos]
 *      summary: Obter um conceito pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID do conceito
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Conceito encontrado
 *        404:
 *          description: Conceito não encontrado
 *
 *    put:
 *      tags: [Conceitos]
 *      summary: Atualizar um conceito pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID do conceito
 *          schema:
 *            type: string
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                student_id:
 *                  type: string
 *                  description: ID do estudante
 *                description:
 *                  type: string
 *                  description: ID da disciplina
 *                teacher_id:
 *                  type: string
 *                  description: ID do professor
 *                conceito:
 *                  type: string
 *                  description: O conceito a ser registrado
 *      responses:
 *        200:
 *          description: Conceito atualizado com sucesso
 *        404:
 *          description: Conceito não encontrado
 *        400:
 *          description: Erro ao atualizar conceito
 *
 *    delete:
 *      tags: [Conceitos]
 *      summary: Deletar um conceito pelo ID
 *      parameters:
 *        - in: path
 *          name: id
 *          required: true
 *          description: ID do conceito
 *          schema:
 *            type: string
 *      responses:
 *        200:
 *          description: Conceito deletado com sucesso
 *        404:
 *          description: Conceito não encontrado
 *        500:
 *          description: Erro ao deletar conceito
 */

router.post('/', authMiddleware,createConceito);
router.get('/', authMiddleware,getConceitos);
router.get('/:id', authMiddleware,getConceitoById);
router.put('/:id', authMiddleware,updateConceito);
router.delete('/:id', authMiddleware,deleteConceito);

module.exports = router;