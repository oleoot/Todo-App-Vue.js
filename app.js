const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello coding garden',
        newTodo: '',
        todos: []
    },
    methods: {
        addTodo() {
            this.todos.push({
                title: this.newTodo,
                done: false
            })
            this.newTodo = ''
        }
    }
})
