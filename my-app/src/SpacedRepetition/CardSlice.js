import { createSlice } from '@reduxjs/toolkit'

export const slice = createSlice({
    name: 'mastery level',
    initialState: {
        cardCollection: [
            {
                id: 0,
                mastery: 1,
                question: "What professional basketball team plays in Indianapolis?",
                answer: "Pacers"
            },
            {
                id: 1,
                mastery: 1, 
                question: "What professional football team plays in Indianapolis?",
                answer: "Colts"
            },
            {
                id: 2,
                mastery: 1,
                question: "What color is my car?",
                answer: "Blue"
            }
        ],
    },
    reducers: { //reducers that change the state
        understandFull: state => {
            state.mastery *= 1.2
        },
        understandHalf: state => {
            state.mastery *= .9
        },
        understandNone: state => {
            state.mastery *= .5
        }
    }
})

export const { understandFull, understandHalf, understandNone } = slice.actions

export default slice.reducer