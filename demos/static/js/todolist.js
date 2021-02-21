function data() {
    return {
        todos: [],
        newTodo: {},
        init: function() {
            console.log('Arrancando');
            this.newTodo = {
                title: 'Título por defecto',
                description: 'Descripción por defecto'
            }
        },
        createTodo: function() {
            let todo = {...this.newTodo, completed: false };
            this.todos.push(todo);
            console.log(this.todos);
        }
    }
}