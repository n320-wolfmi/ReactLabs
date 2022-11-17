import React from "react"
import { Grid } from "@mui/material"
import Task from "./Task"
import { useDrop } from "react-dnd"
import { TaskStore, moveCommand } from "./system/TaskStore"

export default function TaskRow({rowData, rowNum}) {

    const[{ isOver, canDrop }, drop] = useDrop(() => ({
        accept: "card",
        drop: (item) => {
            let newMoveCommand = new moveCommand( item.rowNum, rowNum, {
                index: item.index,
                description: item.description
            })

            TaskStore.moveTask(newMoveCommand)
        }
    }), [])

    //loop through all tasks in the taskrow object's task array
    let tasks = rowData.tasks.map((task, ind) => (
        //create a new task with a key, desc, index, rowNum
        <Task
            key={task.id} 
            description={task.description} 
            index={ind} 
            rowNum={rowNum}
        />
    ))

    return(
        <Grid item xs={4} ref={drop}>
            {rowData.name}
            {tasks}
        </Grid>
    )
}