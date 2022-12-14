import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from '../../../axios';

export const getAllToppings = createAsyncThunk("toppingsSlice/getAllToppings", async () => {
  const response = await axios.get(`toppings`);
  return response.data;
})







