import { createSlice } from '@reduxjs/toolkit'
import dataStoredValue from '../../assets/test-data.json'

const initialState = {
    data: dataStoredValue,
}

export const todosSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addToData: (state, action) => {
            state.data[action.payload.type].push({title:action.payload.title, description:action.payload.description, deadline:action.payload.deadline})
            // TODO: Add saving to file for memory purposes
        },
        removeData: (state, action) => {
            state.data[action.payload.type] = state.data[action.payload.type].filter(item => item.title !== action.payload.title)
            // TODO: add functionality to remove from memory from saved file
        },
        moveData: (state, action) => {
            const previousList = action.payload[0];
            const newList = action.payload[1];
            state.data[newList.type].push({title:newList.title, description:newList.description, deadline:newList.deadline})
            state.data[previousList.type] = state.data[previousList.type].filter(item => item.title !== previousList.title)
        },
    },
})

// Action creators are generated for each case reducer function
export const { addToData, removeData, moveData } = todosSlice.actions

export default todosSlice.reducer