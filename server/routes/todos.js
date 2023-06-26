import express from 'express'
import { getAllTodos, addNewTodo, toggleTodoStatus, deleteTodoById } from '../controllers/todos.js';

const router = express.Router();

router.get("/todos", getAllTodos);
router.post("/todos", addNewTodo);
router.get("/todos/:id", toggleTodoStatus);
router.delete("/todos/:id", deleteTodoById);

export default router