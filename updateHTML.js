const id = (id) => document.getElementById(id),
    initialize = () => {
        id("todo-list").removeChild(id("initialize"))
        id("todo-form").addEventListener("submit", event => event.preventDefault())
    },
    addTodo = (callback) => id("todo-form").addEventListener("submit", (event) => callback(event)),
    append = (title) => {
        let template = id("template-list").content.cloneNode(true)
        template.querySelector(".todo-name").textContent = title

        id("todo-list").appendChild(template)
    }