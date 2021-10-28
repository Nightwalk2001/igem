import {createSlice, PayloadAction} from "@reduxjs/toolkit"

type State = {
    target: string
}

const initialState: State = {
    target: ""
}

const ui = createSlice({
    name: "ui",
    initialState,
    reducers: {
        setTarget: (state, name: PayloadAction<string>) => {
            state.target = name.payload
            return state
        },
        clearTarget: state => {
            state.target = ""
            return state
        }
    }
})

export const {setTarget, clearTarget} = ui.actions
export default ui.reducer