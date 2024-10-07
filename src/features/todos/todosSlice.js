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
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToData } = todosSlice.actions

export default todosSlice.reducer