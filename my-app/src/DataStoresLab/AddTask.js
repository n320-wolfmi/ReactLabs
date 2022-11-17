import React from "react"
import { useState } from "react"
import { Input, Button } from "@mui/material"
import { TaskStore, addCommand } from "./system/TaskStore"

export default function AddTask() {

    const[taskVal, setTaskVal] = useState("")

    return(
        <div>
            <Input 
                value={taskVal} 
                onChange={(e) => {
                    setTaskVal(e.target.value)
                }}
            />
            <Button onClick={() => {
                let cmdAdd = new addCommand(0, taskVal)
                TaskStore.addTask(cmdAdd)
                setTaskVal("")
            }}>Add Item</Button>
        </div>
    )
}