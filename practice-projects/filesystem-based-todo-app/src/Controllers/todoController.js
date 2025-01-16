import getAllTodos from '../Services/getAllTodos.js';
import getSingleTodo from '../Services/getSingleTodo.js'
import createSingleTodo from '../Services/createSingleTodo.js';
import updateSingleTodo from '../Services/updateSingleTodo.js';

export const fetchTodos = async (req, res) => {
    const todos = await getAllTodos();
    res.status(200).json({ success: true, data: todos });
};

export const fetchSingleTodo  = async (req, res) => {
    const id = req.body.id;
    const singleTodo = await getSingleTodo(id);
    res.status(200).json({ success:true, data: singleTodo});
}

export const createTodo = async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const completed  = req.body.completed;
    const todo = await createSingleTodo(id, title, completed);
    res.status(200).json({success: true, data: todo});
}

export const updateTodo = async (req, res) => {
    const id = req.body.id;
    const title = req.body.title;
    const completed  = req.body.completed;
    const todo = await updateSingleTodo(id, title, completed);
    res.status(200).json({success: true, data: todo});
}





