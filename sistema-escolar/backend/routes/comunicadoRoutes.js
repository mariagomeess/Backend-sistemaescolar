const express = require('express');
const router = express.Router();
const comunicadoController = require('../controllers/comunicadoController');

/**
 * @swagger
 * components:
 *   schemas:
 *     Comunicado:
 *       type: object
 *       required:
 *         - title
 *         - description
 *         - author
 *       properties:
 *         id:
 *           type: string
 *           description: ID gerado automaticamente para o comunicado
 *         title:
 *           type: string
 *           description: Título do comunicado
 *         description:
 *           type: string
 *           description: Descrição detalhada do comunicado
 *         author:
 *           type: string
 *           description: ID do autor (usuário) do comunicado
 *         data_created:
 *           type: string
 *           format: date-time
 *           description: Data de criação do comunicado
 *         turmas:
 *           type: array
 *           items:
 *             type: string
 *           description: IDs das turmas específicas para as quais o comunicado se aplica
 *         alunos:
 *           type: array
 *           items:
 *             type: string
 *           description: IDs dos alunos específicos para os quais o comunicado se aplica
 *         data_emissao:
 *           type: string
 *           format: date-time
 *           description: Data de emissão do comunicado
 */

/**
 * @swagger
 * tags:
 *   name: Comunicados
 *   description: Operações relacionadas aos comunicados
 */

/**
 * @swagger
 * /api/comunicados:
 *   get:
 *     summary: Retorna a lista de todos os comunicados
 *     tags: [Comunicados]
 *     responses:
 *       200:
 *         description: A lista de comunicados
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/Comunicado'
 */
router.get('/', comunicadoController.getComunicados);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   get:
 *     summary: Retorna um comunicado pelo ID
 *     tags: [Comunicados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do comunicado
 *     responses:
 *       200:
 *         description: Comunicado encontrado com sucesso
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/Comunicado'
 *       404:
 *         description: Comunicado não encontrado
 */
router.get('/:id', comunicadoController.getComunicadoById);

/**
 * @swagger
 * /api/comunicados:
 *   post:
 *     summary: Cria um novo comunicado
 *     tags: [Comunicados]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comunicado'
 *     responses:
 *       201:
 *         description: Comunicado criado com sucesso
 *       400:
 *         description: Erro nos dados fornecidos
 */
router.post('/', comunicadoController.createComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   put:
 *     summary: Atualiza um comunicado existente
 *     tags: [Comunicados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do comunicado
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/Comunicado'
 *     responses:
 *       200:
 *         description: Comunicado atualizado com sucesso
 *       404:
 *         description: Comunicado não encontrado
 */
router.put('/:id', comunicadoController.updateComunicado);

/**
 * @swagger
 * /api/comunicados/{id}:
 *   delete:
 *     summary: Remove um comunicado pelo ID
 *     tags: [Comunicados]
 *     parameters:
 *       - in: path
 *         name: id
 *         schema:
 *           type: string
 *         required: true
 *         description: ID do comunicado
 *     responses:
 *       200:
 *         description: Comunicado deletado com sucesso
 *       404:
 *         description: Comunicado não encontrado
 */
router.delete('/:id', comunicadoController.deleteComunicado);

module.exports = router;
