document.addEventListener("DOMContentLoaded", function(){ 

    const button = window.document.getElementById("add-todo");
    button.addEventListener("click", handleClick);


    const input = window.document.getElementById("todo-note");
    input.addEventListener("keydown", handleKeyDown)

});

function handleClick(event) {
    addToDo();
}
    
function handleKeyDown(event) {
    if(event.key === "Enter") {
        addToDo()
    }
}

function addToDo() {

    const list = document.getElementById("todo-list");
    const input = document.getElementById("todo-note");
    const text = input.value;

    const item = document.createElement("li")
    item.textContent = text;
    item.addEventListener("click", removeToDo)
    input.value = "";
    input.focus()

    list.appendChild(item);
}

function removeToDo(event) {
    const list = window.document.getElementById("todo-list")
    list.removeChild(event.target)
}

 