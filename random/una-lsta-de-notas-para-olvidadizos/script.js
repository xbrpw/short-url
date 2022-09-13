const form = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo");
const todoList = document.querySelector(".list-group");
const firstCardBody = document.querySelectorAll(".card-body")[0];
const secondCardBody = document.querySelectorAll(".card-body")[1];
const filter = document.querySelector("#filter");
const clearButton = document.querySelector("#clear-todos");
const list = document.querySelector(".list-group-item");
let alert = document.getElementById("alertID");
eventListeners();

//Event Listeners

function eventListeners() {
    secondCardBody.addEventListener("click", deleteTodo);
    form.addEventListener("submit", addTodo);
    document.addEventListener("DOMContentLoaded", loadAllTodosToUI);
    filter.addEventListener("keyup", filterTodos);
    clearButton.addEventListener("click",clearAllTodos);
}

// Todo Ekleme

function addTodo(e) {
    const newTodo = todoInput.value.trim();
    if (newTodo === "") {
        showAlert("danger", "Por favor ingrese una tarea pendiente       ");
    } else {
        showAlert("success", "Inicio de sesión correcto");
        addTodoToUI(newTodo);
        addTodoToStorage(newTodo);
    }
    e.preventDefault();
}


function addTodoToUI(newTodo) {
    const listItem = document.createElement("li");
    const link = document.createElement("a");
    link.href = "#";
    link.className = "delete-item";
    link.innerHTML = " <i class = 'fa fa-remove'></i>";
    listItem.className = "list-group-item d-flex justify-content-between";
    listItem.appendChild(document.createTextNode(newTodo));
    listItem.appendChild(link);
    todoList.appendChild(listItem);
    todoInput.value = "";
}

// Alert

function showAlert(type, message) {
    let = alert;
    if (alert == null) {
        alert = document.createElement("div");
        alert.className = `alert alert-${type}`;
        alert.id = "alertID";
        alert.textContent = message;
        firstCardBody.appendChild(alert);
        alert.style.marginTop = "1rem";
    } else {
        alert.className = `alert alert-${type}`;
        alert.textContent = message;
        document.getElementById("alertID").style.display = 'block';
    }
    setTimeout (function myFunction2() {
        document.getElementById("alertID").style.display = 'none'; 
    }, 1000)
};

// Todo Storage Ekleme

function addTodoToStorage(newTodo) {
    let todos = getTodosFromStorage();

    todos.push(newTodo);

    localStorage.setItem("todos", JSON.stringify(todos));
}

function getTodosFromStorage() { // Storage'den Todoları Almak
    let todos;
    if (localStorage.getItem("todos") === null) {
        todos = [];
    } else {
        todos = JSON.parse(localStorage.getItem("todos"));
    }
    return todos;
}

// Sayfa Yüklendiğinde Storage Yükleme

function loadAllTodosToUI() {
    let todos = getTodosFromStorage();

    todos.forEach(function (todo) {
        addTodoToUI(todo);
    })
}

// Todo Silme

function deleteTodo(e) {
    if (e.target.className === "fa fa-remove") {
        e.target.parentElement.parentElement.remove();
    }
}

// Todo Filtreleme

function filterTodos(e) {
    const filterValue = e.target.value.toLowerCase();
    const listItems = document.querySelectorAll(".list-group-item");

    listItems.forEach(function (listItem) {
        const text = listItem.textContent.toLowerCase();
        if (text.indexOf(filterValue) === -1) {
            // Bulamadı
            listItem.setAttribute("style", "display : none !important");
        } else {
            listItem.setAttribute("style", "display : block");
        }
    });
}

// Tüm Todoları Silme

function clearAllTodos(e) {
    if (confirm("¿Estás seguro de que quieres borrar todo?")) {
        // Arayüzden Todoları Temizleme 
        // todoList.innerHTML = ""; // Yavaş Yöntem
    }
}
console.log(todoList.firstElementChild);