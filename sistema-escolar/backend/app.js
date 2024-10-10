const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const helmet = require('helmet');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const swaggerSetup = require('./docs/swagger');
require('dotenv').config();

// Carregar variáveis de ambiente do arquivo .env
dotenv.config();

// Conectar ao banco de dados
connectDB();

// Inicializar o aplicativo Express  
const app = express();

// Middleware de segurança
app.use(helmet());

// Middleware para habilitar CORS
app.use(cors());
//app.use(bodyParser.json({ limit: '50mb' }));  // Aumentando o limite de tamanho
//app.use(bodyParser.urlencoded({ limit: '50mb', extended: true }));  
//app.use(express.json({ limit: '50mb' }));  // Aumentando o limite de tamanho
//app.use(express.urlencoded({ limit: '50mb', extended: true }));
// Para dados enviados via URL encoded
//app.use(express.static('public'));

// Middleware para log de requisições
app.use(morgan('dev'));

// Middleware para parsing de JSON
app.use(express.json());

// Middleware para parsing de dados de formulários
app.use(express.urlencoded({ extended: true }));

// Rotas
const comunicadoRoutes = require('./routes/comunicadoRoutes');
app.use('/api/comunicado', comunicadoRoutes);

const conceitoRoutes = require('./routes/conceitoRoutes');
app.use('/api/conceito', conceitoRoutes);

const disciplinaRoutes = require('./routes/disciplinaRoutes');
app.use('/api/disciplina', disciplinaRoutes);

const turmaRoutes = require('./routes/turmaRoutes');
app.use('/api/turma', turmaRoutes);

const userRoutes = require('./routes/userRoutes');
app.use('/api/user', userRoutes);

// Configuração do Swagger
swaggerSetup(app);
// Acesse a documentação em http://localhost:3000/api-docs

// Middleware de tratamento de erros
//app.use((err, req, res, next) => {
  // console.error(err.stack);
  // res.status(500).send('Algo deu errado!');
// });

// Configuração da Porta
const PORT = process.env.PORT || 3000;

// Iniciar o servidor
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
