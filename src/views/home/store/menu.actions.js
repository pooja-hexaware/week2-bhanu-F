import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from '../../../axios'

const endPoint = 'items'

export const fetchItems = createAsyncThunk(
    'items/fetchItems',
    async () => {
        const response = await axios.get(`/${endPoint}`);
        const items = await response.data;
        return items;
    }
)

export const getAllItemsById=createAsyncThunk(
    "itemslice/getallitemsbyid",
    async(ids)=>{
        const response=await axios.get(`items/itemsid/findbyids?ids=${ids.toString()}`);
        return response.data;
    }
)



