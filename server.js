const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static('public'));

app.post('/processar-formulario', (req, res) => {
  const { nome, email, telefone, cidade, estado } = req.body;

  console.log('Dados do formulário:');
  console.log('Nome:', nome);
  console.log('Email:', email);
  console.log('Telefone:', telefone);
  console.log('Cidade:', cidade);
  console.log('Estado:', estado);

  res.send('Dados do formulário recebidos com sucesso!');
});

app.listen(port, () => {
  console.log(`Servidor rodando em http://localhost:${port}`);
});
