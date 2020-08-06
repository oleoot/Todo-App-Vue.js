const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello coding garden',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            this.todos.push(this.newTodo)
            console.log(this.todoArr)
        }
    }
})
