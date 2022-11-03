import React from "react"
import { Button, ListItem } from "@mui/material"

export default function InventoryItem(props) {
    return (
        <ListItem>
            { props.item.name }
            <Button variant="contained" color="primary" onClick={() => {
                props.addItem(props.item.id)
            }}>Add</Button>
            <Button variant="contained" color="secondary" onClick={() => {
                //show info from each item
                props.showInfo(props.item.id)
            }}>Info</Button>
        </ListItem>
    ) 
}