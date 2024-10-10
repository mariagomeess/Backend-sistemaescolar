const express = require('express');
const { createUser, getUsers, getUserById, updateUser, deleteUser } = require('../controllers/userController');
const authMiddleware = require('../middleware/authMiddleware');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Users
 *   description: Operações relacionadas a usuários
 */

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Criar um novo usuário
 *     tags: [Users]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [aluno, professor, coordenador]
 *     responses:
 *       201:
 *         description: Usuário criado com sucesso
 *       400:
 *         description: Erro ao criar o usuário
 */
router.post('/', authMiddleware,createUser);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Listar todos os usuários
 *     tags: [Users]
 *     responses:
 *       200:
 *         description: Lista de usuários
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: string
 *                   username:
 *                     type: string
 *                   email:
 *                     type: string
 *                   role:
 *                     type: string
 *                   status:
 *                     type: string
 */
router.get('/', authMiddleware,getUsers);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Obter um usuário específico
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 id:
 *                   type: string
 *                 username:
 *                   type: string
 *                 email:
 *                   type: string
 *                 role:
 *                   type: string
 *                 status:
 *                   type: string
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/:id', authMiddleware,getUserById);

/**
 * @swagger
 * /users/{id}:
 *   put:
 *     summary: Atualizar um usuário
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *               role:
 *                 type: string
 *                 enum: [aluno, professor, coordenador]
 *               status:
 *                 type: string
 *                 enum: [ativo, inativo]
 *     responses:
 *       200:
 *         description: Usuário atualizado com sucesso
 *       400:
 *         description: Erro ao atualizar o usuário
 *       404:
 *         description: Usuário não encontrado
 */
router.put('/:id', authMiddleware,updateUser);

/**
 * @swagger
 * /users/{id}:
 *   delete:
 *     summary: Deletar um usuário
 *     tags: [Users]
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID do usuário
 *         schema:
 *           type: string
 *     responses:
 *       204:
 *         description: Usuário deletado com sucesso
 *       404:
 *         description: Usuário não encontrado
 */
router.delete('/:id', authMiddleware,deleteUser);

module.exports = router;
