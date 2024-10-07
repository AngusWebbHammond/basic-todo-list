import { createSlice } from '@reduxjs/toolkit'
import dataStoredValue from '../../assets/test-data.json'

const initialState = {
    data: dataStoredValue,
}
console.log(dataStoredValue)

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToData: (state, action) => {
            state.data[action.payload.type].push({title:action.payload.title, description:action.payload.description, deadline:action.payload.deadline})
            // TODO: Add saving to file for memory purposes
        },
        removeData: (state, action) => {
            console.log(action.payload.title)
            state.data[action.payload.type] = state.data[action.payload.type].filter(item => item.title !== action.payload.title)
            // TODO: add functionality to remove from memory
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToData, removeData } = todosSlice.actions

export default todosSlice.reducer