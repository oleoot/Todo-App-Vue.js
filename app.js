const app = new Vue({
    el: '#app',
    data: {
        title: 'Hello coding garden',
        newTodo: ''
    },
    methods: {
        addTodo() {
            console.log("Form submitted")
        }
    }
})
