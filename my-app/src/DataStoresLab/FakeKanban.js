import React from "react"
import { useState, useEffect } from "react"
import { Grid, Container } from "@mui/material"
import { TaskStore } from "./system/TaskStore"
import TaskRow from "./TaskRow"
import AddTask from "./AddTask"

export default function FakeKanban() {

    //get rows from data store = rowData
    const[rowData, setRowData] = useState(TaskStore.rows)


    useEffect(() => {
        TaskStore.subscribe(onTaskUpdate)
    }, [])

    function onTaskUpdate() {
        setRowData([...TaskStore.rows])
    }

    //pre-render: loop through row data, create a row item for each
    let rows = rowData.map((row, ind) => (
        //for each, pass through key, rowData, and rowNumber
        <TaskRow key={ind} rowData={row} rowNum={ind}/>
    ))

    return(
        <Container>
            <Grid container>{ rows }</Grid>
            <AddTask/>
        </Container>
    )
}