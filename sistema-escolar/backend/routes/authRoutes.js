const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       required:
 *         - username
 *         - password
 *         - role
 *       properties:
 *         username:
 *           type: string
 *           description: Nome do usuário
 *         password:
 *           type: string
 *           description: Senha do usuário
 *         role:
 *           type: string
 *           description: Função do usuário (ex: admin, user)
 */

/**
 * @swagger
 * /register:
 *   post:
 *     summary: Registra um novo usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/User'
 *     responses:
 *       201:
 *         description: Usuário registrado com sucesso
 *       400:
 *         description: Erro na requisição
 */
router.post('/register', register);

/**
 * @swagger
 * /login:
 *   post:
 *     summary: Realiza o login do usuário
 *     tags: [Autenticação]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *             example:
 *               username: professor1
 *               password: 123456
 *     responses:
 *       200:
 *         description: Login bem-sucedido
 *       401:
 *         description: Credenciais inválidas
 *       500:
 *         description: Erro no servidor
 */
router.post('/login', login);

module.exports = router;
