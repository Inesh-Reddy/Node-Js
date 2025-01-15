const getSingleTodo = async (id) => {
    const response  = await fetch("https://jsonplaceholder.typicode.com/todos/"+id);
    const data = await response.json();
    return data;
}

export default getSingleTodo;