let TaskStore = {
    rows: [
        { 
            name: "Upcoming", 
            tasks: [ 
                { id:0, description: "First Task" },
                { id:1, description: "Second Task" } 
            ]
        },
        { 
            name: "In Progress", 
            tasks: [] 
        },
        { 
            name: "Complete", 
            tasks: [] 
        }
    ],
    subscribers: [],
    subscribe: function(callback) {
        this.subscribers.push(callback)
    },
    updateSubscribers: function() {
        this.subscribers.forEach((callback) => {
            callback()
        })
    },
    addTask: function(addCommand) {
        let tempTasks = this.rows[addCommand.row].tasks

        this.rows[addCommand.row].tasks = [
            ...tempTasks,
            { 
                id: Math.floor(Math.random() * 100000000),
                description: addCommand.description 
            }
        ]

        this.updateSubscribers()
    },
    moveTask: function(moveCommand) {
        let curRowTasks = this.rows[moveCommand.curRow].tasks

        //get task
        let task = curRowTasks.slice(
            moveCommand.task.index, 
            moveCommand.task.index + 1
        )[0]

        //remove from old row
        let filteredRow = curRowTasks.filter( 
            (task, index) => index !== moveCommand.task.index
        )

        this.rows[moveCommand.curRow].tasks = filteredRow

        this.rows[moveCommand.newRow].tasks = [
            ...this.rows[moveCommand.newRow].tasks, task
        ]

        this.updateSubscribers()
    }
}

function addCommand(row, description) {
    this.row = row
    this.description = description
}

function moveCommand(curRow, newRow, task) {
    this.curRow = curRow
    this.newRow = newRow
    this.task = task
}

export { TaskStore, addCommand, moveCommand }