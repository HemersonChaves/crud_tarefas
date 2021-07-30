const express = require('express');
const cors = require('cors');
const { v4: uuidv4, validate } = require('uuid');

const app = express();

app.use(cors());
app.use(express.json());

const users = [];

function checksExistsUserAccount(request, response, next) {
  const { username } = request.headers;
  const user = users.find(user => user.username === username);
  if (!user) {
    return response.status(400).json({ error: "Conta não encontrada" });
  }
  request.user = user;
  return next();
}

app.post('/users', (request, response) => {
  const { name, username } = request.body;
  ususario_existente = users.some(user => user.username === username);
  if (ususario_existente) {
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
  const { user } = request;
  return response.json(user);
});

app.post('/todos', checksExistsUserAccount, (request, response) => {
  // Complete aqui
  const { title, deadline } = request.body;   
  const {user} = request;

  const id_ = uuidv4();
  const todo = {
    created_at: new Date(),
    deadline: new Date(deadline),
    done: false,
    id : id_,    
    title: title,   
  }

  user.todos.push(todo);
  return response.status(201).json(user.todos);

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