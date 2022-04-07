import React, { useEffect } from "react";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import { useDispatch } from "react-redux";
import {
  fetchAsyncMovies,
  fetchAsyncShows,
} from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchAsyncMovies());
    dispatch(fetchAsyncShows());
  }, [dispatch]);

  return (
    <div className="banner-img">
      <ListOfMovies />
    </div>
  );
}
