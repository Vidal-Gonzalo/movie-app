import React, { useEffect } from "react";
import ListOfMovies from "../../components/ListOfMovies/ListOfMovies";
import movieApi from "../../api/movieApi";
import { useDispatch } from "react-redux";
import { addMovies } from "../../features/movies/movieSlice";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const movieText = "Harry";
    const movieType = "movie";
    const fetchMovies = async () => {
      const response = await movieApi
        .get(
          `?apiKey=${process.env.REACT_APP_APIKEY}&s=${movieText}&type=${movieType}`
        )
        .catch((error) => {
          console.log("Err :", error);
        });
      dispatch(addMovies(response.data));
    };

    fetchMovies();
  }, [dispatch]);

  return (
    <div className="banner-img">
      <ListOfMovies />
    </div>
  );
}
