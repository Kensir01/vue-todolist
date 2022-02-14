
const vue = new Vue(
    {
        el: '#app',
        data: {
            newtodo: "",
            // array
            todos: [
                {
                    text: "Lorem ipsum dolor sit, amet consectetur adipisicing elit",
                    done: true
                },
                {
                    text: "Laborum maxime pariatur nihil",
                    done: true
                },
                {
                    text: "Recusandae dicta itaque reiciendis?",
                    done: true
                },
                {
                    text: "Recusandae dicta itaque reiciendis!",
                    done: false
                },
                {
                    text: "Recusandae dicta itaque reiciendis voluptates optio veniam illum",
                    done: false
                },
                {
                    text: "Lorem Anyone?",
                    done: false
                },
            ]
        },
        methods: {
            // aggiunge
            addTodo() {
                if (this.newtodo != "") {
                    this.todos.push(
                        {
                            text: this.newtodo,
                            done: false
                        }
                    );
                    this.newtodo = "";
                }
            },
            // rimuove
            removeTodo(index) {
                this.todos.splice(index, 1);
            }
        }
    }
);
