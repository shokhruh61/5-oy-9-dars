function getTodos() {
    const todos = localStorage.getItem("todos");
    return todos ? JSON.parse(todos) : [];
}

function saveTodos(todos) {
    localStorage.setItem("todos", JSON.stringify(todos));
}

function renderTodos() {
    const todoContainer = document.getElementById("todo--items");
    todoContainer.innerHTML = "";
    const todos = getTodos();

    todos.forEach((todo, index) => {
        const todoDiv = document.createElement("div");
        todoDiv.className = "todo__item";

        const todoText = document.createElement("p");
        todoText.textContent = todo;

        const deleteButton = document.createElement("span");
        deleteButton.textContent = "delete";
        deleteButton.onclick = function () {
            deleteTodo(index);
        };

        todoDiv.appendChild(todoText);
        todoDiv.appendChild(deleteButton);
        todoContainer.appendChild(todoDiv);
    });
}

function addTodo(event) {
    event.preventDefault();
    const todoInput = document.querySelector("#form input[type='text']");
    const todoText = todoInput.value.trim();

    if (todoText) {
        const todos = getTodos();
        todos.push(todoText);
        saveTodos(todos);
        renderTodos();
        todoInput.value = "";
    }
}

function deleteTodo(index) {
    const todos = getTodos();
    todos.splice(index, 1);
    saveTodos(todos);
    renderTodos();
}

function clearTodos() {
    localStorage.removeItem("todos");
    renderTodos();
}

window.onload = function () {
    renderTodos();
};

document.querySelector("form");
addEventListener("submit", addTodo);
document.querySelector(".remove--del button");
addEventListener("click", clearTodos);
