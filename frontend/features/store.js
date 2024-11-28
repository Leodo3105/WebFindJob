import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "./filter/filterSlice"
import jobSlice from "./job/jobSlice"

export const store = configureStore({
    reducer: {
        job: jobSlice,
        filter: filterSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
