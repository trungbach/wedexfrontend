/* eslint-disable no-param-reassign */
import { createSlice, PayloadAction } from '@reduxjs/toolkit'
// import { BlockState } from '../types'

// const initialState: BlockState = { currentBlock: 0, initialBlock: 0 }

export const crashSlice = createSlice({
    name: 'crash',
    initialState: {
        startTime: Date.now(),
        status: "PROGRESS",
        elapsedTime: 0
    },
    reducers: {
        setStartTime: (state, action: PayloadAction<number>) => {
            state.startTime = action.payload
        },
        setStatus: (state, action: PayloadAction<string>) => {
            state.status = action.payload
        },
        setElapsedTime: (state, action: PayloadAction<number>) => {
            state.elapsedTime = action.payload
        }
    },
})

// Actions
export const { setStartTime, setStatus, setElapsedTime } = crashSlice.actions

export default crashSlice.reducer
