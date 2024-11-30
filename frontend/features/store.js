import { configureStore } from "@reduxjs/toolkit"
import filterSlice from "./filter/filterSlice"
import jobSlice from "./job/jobSlice"
import countriesSlice from "./location/countriesSlice"
import citiesSlice from "./location/citiesSlice"
import districtsSlice from "./location/districtsSlice"

export const store = configureStore({
    reducer: {
        job: jobSlice,
        filter: filterSlice,
        countries: countriesSlice,
        cities: citiesSlice,
        districts: districtsSlice,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
})
