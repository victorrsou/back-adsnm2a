const express = require('express');

// carrega yaml
const swaggerUI = require('swagger-ui-express');

const YAML = require('yaml');
// file system pacote do node para ler a apartir de um diretório
const fs = require('fs');

// para carregar arquivo yaml 
const file = fs.readFileSync('./swagger.yaml', 'utf8');
const swaggerDoc = YAML.parse(file);

const router = express.Router();

router.use('/', swaggerUI.serve);

router.get('/', swaggerUI.setup(swaggerDoc));

module.exports = router;