const button = document.getElementById("add-todo");
button.addEventListener("click", handleClick);

function handleClick(event) {
    const input = document.getElementById("todo-mote");
    const list = document.getElementById("todo-list")

    const item = document.createElement("li")
    item.textContent = input.value;

    list.appendChild(item);
}