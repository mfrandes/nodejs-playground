const tasks = {
    tasks: [{
        name: 'Grocery shopping',
        completed: true
    }, {
        name: 'Clean yard',
        completed: false
    }, {
        name: 'Do the dishes',
        completed: false
    }, {
        name: 'Piss of the negihbor',
        completed: false
    }, {
        name: 'Do rampage in the naighborhood',
        completed: false
    }],
    getTasksToDo () {
        return this.tasks.filter(task => !task.completed);
    }
}
console.log(tasks.getTasksToDo());