import {createSlice} from "@reduxjs/toolkit"

type State = { lang: "zh" | "en" }

const initialState: State = {lang: "en"}

const locale = createSlice({
    name: "locale",
    initialState,
    reducers: {
        switchToZh: state => {
            state.lang = "zh"
            return state
        },
        switchToEn: state => {
            state.lang = "en"
            return state
        }
    }
})

export const {switchToZh, switchToEn} = locale.actions
export default locale.reducer