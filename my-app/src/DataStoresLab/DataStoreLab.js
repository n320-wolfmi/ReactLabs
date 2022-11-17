import React from "react"
import FakeKanban from "./FakeKanban"
import { DndProvider } from "react-dnd"
import { HTML5Backend } from "react-dnd-html5-backend"

export default function DataStoreLab() {
    
    //drag and drop
    return(
        <div>
            <DndProvider backend={HTML5Backend}>
                <FakeKanban/>
            </DndProvider>
        </div>
    )
}