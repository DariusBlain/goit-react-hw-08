import { createAsyncThunk } from "@reduxjs/toolkit";
import { clearToken, goitApi, setToken } from "../../config/goitApi";

export const register = createAsyncThunk(
  "auth/register",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/signup", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const login = createAsyncThunk(
  "auth/login",
  async (credentials, thunkAPI) => {
    try {
      const { data } = await goitApi.post("users/login", credentials);
      setToken(data.token);
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk("auth/logout", async (_, thunkAPI) => {
  try {
    await goitApi.post("users/logout");
    clearToken();
  } catch (error) {
    return thunkAPI.rejectWithValue(error.message);
  }
});

export const refreshUser = createAsyncThunk(
  "auth/refresh",
  async (_, thunkAPI) => {
    const savedToken = thunkAPI.getState().auth.token;
    if (savedToken === null) {
      return thunkAPI.rejectWithValue("Token is not exist!");
    }

    try {
      setToken(savedToken);
      const { data } = await goitApi.get("users/current");
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error.message);
    }
  }
);
