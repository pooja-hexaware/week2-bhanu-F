import { createAsyncThunk } from '@reduxjs/toolkit'
import { getAllItemsById } from 'views/home/store/menu.actions';
import axios from '../../../axios'

const endPoint = 'store'

export const fetchShops = createAsyncThunk(
    'store/fetchShops',
    async () => {
        const response = await axios.get(`/${endPoint}`);
        const shops = await response.data;
        return shops;
    }
)

export const fetchShopById=createAsyncThunk(
    'store/fetchshopbyid',
    async(id,thunkAPI)=>{
        const response= await axios.get(`store/${id}`);
        thunkAPI.dispatch(getAllItemsById(response.data.menu));
        return response.data;
    }
)

