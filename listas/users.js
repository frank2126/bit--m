const express = require('express');
const router = express.Router();
const users = require('./database');

// Obtener todos los usuarios
router.get('/', (req, res) => {
  res.json(users);
});

// Obtener un usuario por nombre de usuario
router.get('/:username', (req, res) => {
  const username = req.params.username;
  const user = users.find(u => u.username === username);

  if (user) {
    res.json(user);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// Crear un nuevo usuario
router.post('/', (req, res) => {
  const newUser = req.body;

  if (!newUser.username || !newUser.password) {
    return res.status(400).json({ message: 'Nombre de usuario y contraseña son obligatorios' });
  }

  users.push(newUser);
  res.status(201).json(newUser);
});

// Actualizar un usuario existente
router.put('/:username', (req, res) => {
  const username = req.params.username;
  const updatedUser = req.body;

  const index = users.findIndex(u => u.username === username);

  if (index !== -1) {
    users[index] = updatedUser;
    res.json(updatedUser);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

// Eliminar un usuario
router.delete('/:username', (req, res) => {
  const username = req.params.username;
  const index = users.findIndex(u => u.username === username);

  if (index !== -1) {
    const deletedUser = users.splice(index, 1)[0];
    res.json(deletedUser);
  } else {
    res.status(404).json({ message: 'Usuario no encontrado' });
  }
});

module.exports = router;
