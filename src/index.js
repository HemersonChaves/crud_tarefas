const express = require('express');
const cors = require('cors');
const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  // Complete aqui
}

app.post('/users', (request, response) => {

  const {name, username} = request.body;
  ususario_existente = users.some(user => user.name === name || user.username === username);
  if(ususario_existente){
    return response.status(400).json({ error: "Conta existente" });
  }
  const id_ = uuidv4();
  users.push({ 
    id: id_,
    name: name, 
    username: username, 
    todos: []
  });
  return response.status(201).json(users.find(user => user.id === id_));

});

app.get('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.put('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.patch('/todos/:id/done', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

app.delete('/todos/:id', checksExistsUserAccount, (request, response) => {
  // Complete aqui
});

module.exports = app;