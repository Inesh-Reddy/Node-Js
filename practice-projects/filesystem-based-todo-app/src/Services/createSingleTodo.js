const createSingleTodo = async (id, title, completed) => {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos'
    ,{
            method: 'POST',
            body: JSON.stringify({
                id: id,
                title: title,
                body: completed,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    }
);
    const data = await response.json();
    return data;
};
export default createSingleTodo;