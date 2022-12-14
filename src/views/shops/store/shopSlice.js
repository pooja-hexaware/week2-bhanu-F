import { createSlice } from '@reduxjs/toolkit'
import { fetchShopById, fetchShops } from './shop.actions'


const fetchShopsExtraReducer = {
    [fetchShops.pending]: (state, action) => {
        state.loading = true
    },
    [fetchShops.fulfilled]: (state, action) => {
        state.shops = [...action.payload]
        state.loading = false
    },
    [fetchShops.rejected]: (state, action) => {
        state.loading = false
    },
}

const fetchShopsByIdExtraReducer = {
    [fetchShopById.pending]: (state, action) => {
        state.loading = true
    },
    [fetchShopById.fulfilled]: (state, action) => {
        state.shops = [...action.payload]
        state.loading = false
    },
    [fetchShopById.rejected]: (state, action) => {
        state.loading = false
    },
}











const shops = createSlice({
    name: 'shops',
    initialState: {
        shops: [],
        loading: false,
    },
    reducers: {
        addShops(state, action) {
            state.shops.push(action.payload)
        },      
    },
    extraReducers: {
        ...fetchShopsExtraReducer,
        ...fetchShopsByIdExtraReducer  
    },
})

export const { addShops } = shops.actions

export default shops.reducer