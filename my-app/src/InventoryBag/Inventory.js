import "./inventory.css"
import React, { useState, useEffect } from "react"
import InventoryItem from "./InventoryItem"
import { List, Modal, Grid } from "@mui/material"
import Bag from "./Bag"

export default function Inventory() {
    //items is an array for the inventory, json data is sent via setItems
    const [items, setItems] = useState([])

    //selectedItem is an object that holds info
    const [selectedItem, selectItem] = useState({})

    //setting modal on and off
    const [showModal, setModalOpen] = useState(false)

    //
    const [bagItems, setBagItems] = useState([])

    //on component mount, load data
    useEffect(() => {
        fetch("data/items.json")
            .then((result) => result.json())
            .then((data) => {
                //store data, send items to useState
                setItems(data)
            })
    }, [])

    //create our inventory list
    const itemsList = items.map((item) => (//for each item in the items array (from the useState)
        //create an inventory item from InventoryItem.js
        <InventoryItem key={item.id} item={item} addItem={addItem} showInfo={showInfo} />
    ))

    return (
        <div>
            <Modal open={showModal} onClose={() => { setModalOpen(false) }}>
                <div id="infoBox">
                    <h3>{selectedItem.name}</h3>
                    <p>{selectedItem.desc}</p>
                    <p>Weight: {selectedItem.weight}</p>
                </div>
            </Modal>

            <h2>Inventory Bag Lab</h2>

            <Grid container>
                <Grid>
                    <h2>Items</h2>
                    <List>{itemsList}</List>
                </Grid>
                <Grid>
                    <h2>Bag</h2>
                    <Bag items={bagItems} removeItem={removeItem} />
                </Grid>
            </Grid>
        </div>
    )

    function removeItem(itemInd) {
        //create a copy of bag items
        const tempBag = [...bagItems]
        //remove the item at index from the copied array
        tempBag.splice(itemInd, 1)
        //set as new array
        setBagItems(tempBag)
    }

    function showInfo(itemId) {
        //select the item to be shown and put info into variable
        selectItem(items[itemId])
        //show the info
        setModalOpen(true)
    }

    //adds items to the bag
    function addItem(itemId) {
        setBagItems([...bagItems, items[itemId]])
    }
}