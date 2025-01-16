import express from 'express';
import { fetchTodos, fetchSingleTodo, createTodo, updateTodo } from '../Controllers/todoController.js';

const router = express.Router();
router.get('/', fetchTodos);
router.get('/single', fetchSingleTodo);
router.post('/', createTodo);
router.put('/', updateTodo);

export default router;