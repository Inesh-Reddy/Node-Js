const updateSingleTodo = async (id, title, completed) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`, {
            method: 'PUT',
            body: JSON.stringify({
                id: id,
                title: title,
                completed: completed,
                userId: 1,
            }),
            headers: {
                'Content-type': 'application/json; charset=UTF-8',
            },
    })

    const data = await response.json();
    return data;
};
export default updateSingleTodo;
