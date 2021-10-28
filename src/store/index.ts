import {configureStore} from "@reduxjs/toolkit"
import locale from "./locale.slice"
import ui from "./ui.slice"

const store = configureStore({
    reducer: {
        locale,
        ui
    }
})

export type State = ReturnType<typeof store.getState>
export * from "./locale.slice"
export * from "./ui.slice"
export default store