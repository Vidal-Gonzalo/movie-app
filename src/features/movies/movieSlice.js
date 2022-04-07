import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import movieApi from "../../api/movieApi";

export const fetchAsyncMovies = createAsyncThunk(
  "movies/fetchAsyncMovies",
  async () => {
    const movieText = "Harry";
    const type = "movie";
    const response = await movieApi
      .get(
        `?apiKey=${process.env.REACT_APP_APIKEY}&s=${movieText}&type=${type}`
      )
      .catch((error) => {
        console.log("Err :", error);
      });
    return response.data;
  }
);

export const fetchAsyncShows = createAsyncThunk(
  "movies/fetchAsyncShows",
  async () => {
    const seriesText = "Friends";
    const type = "series";
    const response = await movieApi
      .get(
        `?apiKey=${process.env.REACT_APP_APIKEY}&s=${seriesText}&type=${type}`
      )
      .catch((error) => {
        console.log("Err :", error);
      });
    return response.data;
  }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
  "movies/fetchAsyncMovieOrShowDetail",
  async (id) => {
    const response = await movieApi
      .get(`?apiKey=${process.env.REACT_APP_APIKEY}&i=${id}&Plot=full`)
      .catch((error) => {
        console.log("Err :", error);
      });
    return response.data;
  }
);

const initialState = {
  movies: {},
  shows: {},
  selectedMovieOrShow: {},
};

const movieSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    addMovies: (state, { payload }) => {
      state.movies = payload;
    },
    removeSelectedMovieOrShow: (state) => {
      state.selectedMovieOrShow = {};
    },
  },
  extraReducers: {
    [fetchAsyncMovies.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully!");
      return { ...state, movies: payload };
    },
    [fetchAsyncMovies.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncShows.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncShows.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully!");
      return { ...state, shows: payload };
    },
    [fetchAsyncShows.rejected]: () => {
      console.log("Rejected");
    },
    [fetchAsyncMovieOrShowDetail.pending]: () => {
      console.log("Pending");
    },
    [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
      console.log("Fetched successfully!");
      return { ...state, selectedMovieOrShow: payload };
    },
    [fetchAsyncMovieOrShowDetail.rejected]: () => {
      console.log("Rejected");
    },
  },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movies;
export const getAllShows = (state) => state.movies.shows;
export const getSelectedMovieOrShow = (state) =>
  state.movies.selectedMovieOrShow;
export default movieSlice.reducer;
