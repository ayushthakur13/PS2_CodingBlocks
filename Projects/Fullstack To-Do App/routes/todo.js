const express = require('express');
const router = express.Router();

const todoController = require('../controllers/todocontroller')

router.get('/gettodos',todoController.getGetToDos)

router.post('/addtodo',todoController.postAddToDo)

router.post('/deletetodo',todoController.postDeleteTodo)

router.get('/increase',todoController.getIncrease)

router.get('/decrease',todoController.getDecrease)

module.exports = router;
