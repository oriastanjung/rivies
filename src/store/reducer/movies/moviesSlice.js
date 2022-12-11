import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { apiKey } from "../../../const/apiKey";
import axios from "axios";

const initialState = {
  latest: [],
  popular: [],
  searched: "",
  isLoading: false,
};
const thisDay = new Date();
const API_URL = `https://api.themoviedb.org/3`;
const urlLatestMovies = `/discover/movie?&sort_by=popularity.desc&page=2&api_key=${apiKey}`;

const urlPopularMovies = `/discover/movie?sort_by=popularity.desc&api_key=${apiKey}`;
const urlSearchMovies = `/search/movie/?api_key=${apiKey}`;

export const fetchLatest = createAsyncThunk("/movies/fetchLatest", async () => {
  try {
    const data = await axios.get(`${API_URL}${urlLatestMovies}`);
    console.log("data >>> ", data.data.results);
    return data.data.results;
  } catch (error) {
    console.log(error);
  }
});

export const fetchPopular = createAsyncThunk(
  "/movies/fetchPopular",
  async () => {
    try {
      const data = await axios.get(`${API_URL}${urlPopularMovies}`);
      // console.log("data >>> ", data.data.results);
      return data.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

export const fetchBySearch = createAsyncThunk(
  "/movies/fetchBySearch",
  async (query) => {
    try {
      console.log("query search >> ", query);
      const data = await axios.get(
        `${API_URL}${urlSearchMovies}&query=${query}`
      );
      console.log("data search >>> ", data.data.results);
      return data.data.results;
    } catch (error) {
      console.log(error);
    }
  }
);

const moviesSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {},
  extraReducers(builder) {
    builder.addCase(fetchLatest.fulfilled, (state, action) => {
      //   console.log("data >> ", action.payload);
      state.latest = action.payload;
      state.searched = initialState.searched;
    });
    builder.addCase(fetchPopular.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchPopular.fulfilled, (state, action) => {
      //   console.log("data >> ", action.payload);
      state.popular = action.payload;
      state.searched = initialState.searched;
      state.isLoading = initialState.isLoading;
    });
    builder.addCase(fetchBySearch.fulfilled, (state, action) => {
      //   console.log("data >> ", action.payload);
      state.searched = action.payload;
    });
  },
});

export default moviesSlice.reducer;
