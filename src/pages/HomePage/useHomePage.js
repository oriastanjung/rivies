import axios from "axios";
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { apiKey } from "../../const/apiKey";
import {
  fetchLatest,
  fetchPopular,
  fetchBySearch,
} from "../../store/reducer/movies/moviesSlice";
function useHomePage() {
  const dispatch = useDispatch();
  const movies = useSelector((state) => state.movies);
  const { latest, popular, searched, isLoading } = useSelector(
    (state) => state.movies
  );
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedMovie, setSelectedMovie] = useState({});
  const [play, setPlay] = useState(false);
  const [itemAwal, setItemAwal] = useState({});
  const handleChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("search >> ", searchQuery);
    dispatch(fetchBySearch(searchQuery));
  };

  const fetchMovie = async (id) => {
    try {
      const { data } = await axios.get(
        `https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&append_to_response=videos`
      );
      return data;
    } catch (error) {
      console.log(error);
    }
  };

  const selectMovie = async (id) => {
    const movieSelected = await fetchMovie(id);
    // console.log("movie selected >> ", movieSelected);
    setPlay(false);
    setSelectedMovie(movieSelected);
  };

  const handleSetPlay = () => {
    setPlay(!play);
  };
  useEffect(() => {
    dispatch(fetchLatest());
    dispatch(fetchPopular());
  }, []);
  useEffect(() => {
    if (!searchQuery) {
      dispatch(fetchLatest());
      dispatch(fetchPopular());
      setSelectedMovie(popular[0]);
      selectMovie(popular[0].id);
    } else {
      dispatch(fetchBySearch(searchQuery));
      setSelectedMovie(searched[0]);
      // selectMovie(searched[0].id);
    }
  }, [searchQuery]);

  return {
    latest,
    popular,
    searchQuery,
    handleChange,
    handleSubmit,
    searched,
    selectedMovie,
    setSelectedMovie,
    selectMovie,
    play,
    handleSetPlay,
    isLoading,
  };
}

export default useHomePage;
