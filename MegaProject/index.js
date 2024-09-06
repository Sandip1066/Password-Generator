const todos = [
    {
        id: 1,
        todo: " Todo 1",
        completed: false,
    },
    {
        id: 2,
        todo: " Todo 2",
        completed: true,
    },
    {
        id: 3,
        todo: " Todo 3",
        completed: false,
    },
    {
        id: 4,
        todo: " Todo 4",
        completed: true,
    },
]

// todos.map(todo => todo.id == 5 ? console.log(todo) : console.log(todo))
// todos.map(todo => todo.id == 3 ? console.log({todo, todo:'surehs'}) : console.log(todo))

// const addTodo = (todo) => {
//     console.log([...todos, { ...todo }])
// }
// addTodo({  id: Date.now() ,todo: 'surehs', completed: true });

// console.log(todos)
const updat = (id, todo) => {
    todos.map((prevTodo) => (prevTodo.id === id ? console.log(todo) : console.log(prevTodo)))
}

updat(3, { todo: 'surehs' })
console.log(" ");
updat(5, {todo: 'surehs'})
