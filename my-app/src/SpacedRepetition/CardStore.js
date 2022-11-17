import { configureStore } from "@reduxjs/toolkit"
import CardReducer from "./CardSlice"

export default configureStore({
    reducer: {
        cards: CardReducer //handle the mastery state using slice reducers
    }
})