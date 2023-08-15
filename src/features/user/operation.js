import axios from "axios";
import { BASE_URL } from "../../utils/constants";
import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUser = createAsyncThunk(
  "users/createUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/users`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const loginUser = createAsyncThunk(
  "users/loginUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.post(`${BASE_URL}/auth/login`, payload);
      const login = await axios(`${BASE_URL}/auth/profile`, {
        headers: {
          Authorization: `Bearer ${res.data.access_token}`,
        },
      });

      return login.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);

export const updateUser = createAsyncThunk(
  "users/updateUser",
  async (payload, thunkAPI) => {
    try {
      const res = await axios.put(`${BASE_URL}/users/${payload.id}`, payload);
      return res.data;
    } catch (err) {
      console.log(err);
      return thunkAPI.rejectWithValue(err);
    }
  }
);
