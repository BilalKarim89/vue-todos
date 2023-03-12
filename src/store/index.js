import { createStore } from "vuex";
import { uid } from "uid";

export default createStore({
    state: {
        title: 'Create todo',
        todos: []
    },
    mutations: {
        fetchTodoList(state) {
            const savedTodoList = JSON.parse(localStorage.getItem("todoList"));
            if (savedTodoList) {
                state.todos = savedTodoList;
            }
        },
        createTodo(state, todo) {
            state.todos.push({
                id: uid(),
                todo,
                isCompleted: false,
                isEditing: null,
                date: getCurrentDate()
            });
            setTodoListLocalStorage(state);
        },

        toggleEditTodo(state, todoPos) {
            state.todos[todoPos].isEditing = !state.todos[todoPos].isEditing;
            setTodoListLocalStorage(state);
        },

        updateTodo(state, { todoVal, todoPos }) {
            state.todos[todoPos].todo = todoVal;
            setTodoListLocalStorage(state);
        },

        toggleTodoComplete(state, todoPos) {
            state.todos[todoPos].isCompleted = !state.todos[todoPos].isCompleted;
            setTodoListLocalStorage(state);
        },

        deleteTodo(state, todo) {
            state.todos = state.todos.filter(
                (todoFilter) => todoFilter.id !== todo.id
            );
            setTodoListLocalStorage(state);
        },
    },
    actions: {},
    modules: {},
});

function setTodoListLocalStorage(state) {
    localStorage.setItem("todoList", JSON.stringify(state.todos));
}

function getCurrentDate() {
    let today = new Date();
    const dd = String(today.getDate()).padStart(2, '0');
    const mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    const yyyy = today.getFullYear();

    today = mm + '/' + dd + '/' + yyyy;
    return today;
}