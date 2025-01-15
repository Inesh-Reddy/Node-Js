// https://jsonplaceholder.typicode.com/todos

import express from 'express';
import todoRoutes from './routes/todoRoutes.js';

const app = express();

app.use(express.json());
app.use('/todos', todoRoutes);

app.listen(3000, () => {
    console.log(`Server is running on port 3000...`);
});

export default app;
